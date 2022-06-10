import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  zip_code: '',
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.UPDATE_ZIP_CODE:
      return {
        ...state,
        zip_code: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
