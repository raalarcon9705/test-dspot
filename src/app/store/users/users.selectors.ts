import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUsersState = createFeatureSelector<fromUsers.State>(
  fromUsers.usersFeatureKey
);

export const { selectAll: selectAllUsers } =
  fromUsers.adapter.getSelectors(selectUsersState);

export const selectUsersLoading = createSelector(
  selectUsersState,
  (state) => !!state.loading
);
export const selectUserSelected = createSelector(
  selectUsersState,
  (state) => state.entities[state.selected!]
);
