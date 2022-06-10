import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const updateZipCode = (zipcode) => ({
  type: UserActionTypes.UPDATE_ZIP_CODE,
  payload: zipcode,
});
