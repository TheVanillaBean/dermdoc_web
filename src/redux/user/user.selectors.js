import { createSelector } from 'reselect';
import { getState } from './user.utils';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectZipCode = createSelector([selectUser], (user) => user.zip_code);

export const selectState = createSelector([selectZipCode], (zipcode) => getState(zipcode));
