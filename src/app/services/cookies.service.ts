import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UniversalService } from './universal.service';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  private cookieStore: {[key: string]: string} = {};
  private isPlatformBrowser: boolean;
  changes$ = new BehaviorSubject<{ [key: string]: string }>({});

  constructor(universal: UniversalService) {
    this.isPlatformBrowser = universal.isPlatformBrowser;
    if (this.isPlatformBrowser) {
      this.parseCookies(document.cookie);
    } else {
      this.parseCookies(universal.request.headers.cookie as string);
    }
  }

  public parseCookies(cookies = ''): void {
    if (!cookies) {
      return;
    }
    this.cookieStore = {};
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split('=');
      this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
    }
  }

  get(key: string): string {
    return !!this.cookieStore[key || ''] ? this.cookieStore[key || ''] : '';
  }

  remove(key: string): void {
    if (this.isPlatformBrowser) {
      document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
    }
    delete this.cookieStore[key];
  }

  set(key: string, value: string, date?: number): void {
    if (this.isPlatformBrowser) {
      let cookie = key + '=' + (value || '');
      if (date) {
        const d = new Date(date);
        const expires = 'expires=' + d.toUTCString();
        cookie += ';' + expires + ';path=/';
      }
      document.cookie = cookie;
    }
    this.cookieStore[key] = value;
    this.changes$.next(this.cookieStore);
  }

  public static parse(cookies = '') {
    const cookieStore: {[key: string]: string} = {};

    if (!cookies) {
      return cookieStore;
    }
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
      const cookieArr = cookie.split('=');
      cookieStore[cookieArr[0].trim()] = cookieArr[1];
    }

    return cookieStore;
  }
}
