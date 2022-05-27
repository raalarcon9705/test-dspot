import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

interface CacheRecord {
  response: HttpResponse<unknown>,
  timeout: any,
  expire: number;
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private _cache = new Map<string, CacheRecord>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      if (request.headers.has('ignore-cache')) {
        return next.handle(request.clone({
          headers: request.headers.delete('ignore-cache')
        }));
      }

      const url = request.urlWithParams;
      const cached = this._cache.get(url);

      if (!!cached) {
        return of(cached.response);
      }

      return next.handle(request)
        .pipe(
          tap(response => {
            if (response instanceof HttpResponse) {
              const expire = this._getExpiryTime(request);
              const timeout = setTimeout(() => {
                this._cache.delete(url);
              }, expire);
              this._cache.set(url, { response, timeout, expire });
            }
          })
        )
    }
    return next.handle(request);
  }

  private _getExpiryTime(req: HttpRequest<unknown>) {
    const defaultExpire = 20 * 60 * 1000;
    const timeStr = req.headers.get('cache-expire');
    const expire = timeStr ? parseInt(timeStr) : defaultExpire;

    return expire;
  }
}
