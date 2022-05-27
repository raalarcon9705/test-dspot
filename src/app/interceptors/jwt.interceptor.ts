import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _jwtService: JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this._jwtService.jwt) {
      if (!this._jwtService.isTokenExpired()) {
        return next.handle(request.clone({
          setHeaders: {
            Authorization: `Bearer ${this._jwtService.jwt}`
          }
        }))
      } else {
        // TODO Refresh token here and returns request clone with the new JWT
      }
    }
    return next.handle(request);
  }
}
