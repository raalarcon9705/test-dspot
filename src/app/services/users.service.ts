import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, withLatestFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users$ = new BehaviorSubject<User[]>([]);
  private _loading$ = new BehaviorSubject<boolean>(false);
  private _error$ = new BehaviorSubject<any>(null);
  private _selectedId$ = new BehaviorSubject<number | null>(null);

  get users$() {
    return this._users$.asObservable();
  }

  get loading$() {
    return this._loading$.asObservable();
  }

  get error$() {
    return this._error$.asObservable();
  }

  get selectedUser$() {
    return this._selectedId$.pipe(
      withLatestFrom(this._users$),
      map(([id, users]) => {
        if (!id) {
          return undefined;
        }

        return users.find(user => user.id === id);
      })
    )
  }

  constructor(private http: HttpClient) {}

  getUsers(page = 1, limit = 10) {
    const params = { page, limit } as any;

    this._loading$.next(true);

    return this.http
      .get<User[]>(`${environment.api}/friends`, { params })
      .subscribe({
        next: (users) => {
          this._users$.next(users);
          this._loading$.next(false);
        },
        error: (error) => {
          this._loading$.next(false);
          this._error$.next(error);
        },
      });
  }

  getUserDetails(id: number) {
    this._loading$.next(true);
    this._selectedId$.next(id);

    return this.http
      .get<User>(`${environment.api}/friends/${id}`)
      .subscribe({
        next: (user) => {
          const users = this._users$.value;
          users.push(user);
          this._users$.next(users);
          this._loading$.next(false);
        },
        error: (error) => {
          this._loading$.next(false);
          this._error$.next(error);
        },
      });
  }
}