import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UsersSelectors from './users.selectors';
import * as UsersActions from './users.actions';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {

  all$ = this._store.select(UsersSelectors.selectAllUsers);
  loading$ = this._store.select(UsersSelectors.selectUsersLoading);
  selected$ = this._store.select(UsersSelectors.selectUserSelected);

  constructor(private _store: Store) { }

  loadUsers(page = 1, limit = 10, filter = '') {
    this._store.dispatch(UsersActions.loadUsers({ page, limit, filter }))
  }

  loadUser(id: number) {
    this._store.dispatch(UsersActions.loadUser({ id }))
  }
}
