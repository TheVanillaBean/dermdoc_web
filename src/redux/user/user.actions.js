import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const updateMailingState = (state) => ({
  type: UserActionTypes.UPDATE_MAILING_STATE,
  payload: state,
});
