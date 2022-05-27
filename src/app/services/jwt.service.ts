import { Inject, Injectable } from '@angular/core';
import { default as jwt_decode } from 'jwt-decode';
import { BehaviorSubject, EMPTY, from, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookiesService } from './cookies.service';
import { UniversalService } from './universal.service';

interface JWTData {
  id: string | number,
  email: string,
  img: string,
  exp: number;
  iat: number;
  iss: string;
}

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  isLoggedIn: boolean;
  jwt?: string;
  refreshToken?: string;
  jwt$ = new BehaviorSubject({ token: '', update: false });
  decoded?: JWTData;
  interval: any;

  constructor(public cookies: CookiesService, private _universal: UniversalService) {
    if (cookies.get(environment.cookies.jwtRefresh)) {
      this.setRefreshToken(cookies.get(environment.cookies.jwtRefresh), false);
    }
    if (!!this.refreshToken && cookies.get(environment.cookies.jwt)) {
      this.setToken(cookies.get(environment.cookies.jwt), false);
    }

    this.isLoggedIn = !!this.refreshToken;
  }

  setToken(token: string, updateCookie = true): void {
    this.jwt = token;
    this.decodeToken();
    this.jwt$.next({ token, update: updateCookie });

    if (updateCookie && this.decoded && !!token) {
      this.cookies.set(environment.cookies.jwt, token, this.decoded.exp * 1000);
    }

    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.cookies.remove(environment.cookies.jwt);
    }
  }

  setRefreshToken(refresh: string, updateCookie = true) {
    this.refreshToken = refresh;
    if (updateCookie) {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      this.cookies.set(environment.cookies.jwtRefresh, refresh, date.getTime());
    }
  }

  decodeToken(): void {
    if (this.jwt) {
      this.decoded = jwt_decode(this.jwt);
    } else {
      this.decoded = undefined;
    }
  }

  getDecodedToken() {
    return this.decoded;
  }


  getExpiryTime(): number {
    this.decodeToken();
    return (this.decoded ? this.decoded?.exp : null) || 0;
  }

  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();

    if (expiryTime) {
      const d = new Date(1000 * expiryTime);
      return d.getTime() - 3 * 60 * 1000 < new Date().getTime();
    } else {
      return false;
    }
  }

  clear() {
    this.setRefreshToken('');
    this.setToken('');
    this.cookies.remove(environment.cookies.jwt);
    this.cookies.remove(environment.cookies.jwtRefresh);
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
