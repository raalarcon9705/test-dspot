import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user';

export const loadUsers = createAction(
  '[Users] Load Users',
  props<{
    page?: number;
    limit?: number;
    filter?: string;
  }>()
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[Users] Load User',
  props<{ id: number }>()
);
export const loadUserSuccess = createAction(
  '[Users] Load User Success',
  props<{ user: User }>()
);
export const loadUserFailure = createAction(
  '[Users] Load User Failure',
  props<{ error: any }>()
);
