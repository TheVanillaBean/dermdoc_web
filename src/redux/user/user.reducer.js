import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  mailing_state: '',
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UserActionTypes.UPDATE_MAILING_STATE:
      return {
        ...state,
        mailing_state: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
