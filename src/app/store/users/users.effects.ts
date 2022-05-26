import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UsersActions from './users.actions';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      concatMap(({ page, limit, filter }) =>
        this._usersService.getUsers(page, limit, filter).pipe(
          map((users) => UsersActions.loadUsersSuccess({ users })),
          catchError((error) => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.loadUser),
      concatMap(({ id }) =>
        this._usersService.getUserDetails(id).pipe(
          map((user) => UsersActions.loadUserSuccess({ user })),
          catchError((error) => of(UsersActions.loadUserFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private _usersService: UsersService) {}
}
