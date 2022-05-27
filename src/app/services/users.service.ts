import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page = 1, limit = 10, filter = '') {
    const params = { page, limit, filter } as any;

    return this.http.get<User[]>(`${environment.api}/friends`, { params });
  }

  getUserDetails(id: number) {
    return this.http.get<User>(`${environment.api}/friends/id`);
  }
}
