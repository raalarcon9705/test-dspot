import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as UsersActions from './users.actions';
import { User } from 'src/app/interface/user';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  loading?: boolean;
  selected?: number;
}

export const adapter = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  // LOAD MANY USERS
  on(UsersActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
    adapter.upsertMany(users, {
      ...state,
      loading: false,
    })
  ),
  on(UsersActions.loadUsersFailure, (state, action) => ({
    ...state,
    loading: false,
  })),

  // LOAD ONE USER
  on(UsersActions.loadUser, (state, { id }) => ({ ...state, loading: true, selected: id })),
  on(UsersActions.loadUserSuccess, (state, { user }) =>
    adapter.upsertOne(user, { ...state, loading: false })
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);
