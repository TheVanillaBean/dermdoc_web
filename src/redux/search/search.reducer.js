import { SearchActionTypes } from './search.types';

const INITIAL_STATE = {
  search: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.UPDATE_ZIP_CODE:
      return {
        ...state,
        zip_code: action.payload,
      };
    case SearchActionTypes.UPDATE_VISIT_REASON:
      return {
        ...state,
        insurance_brand: action.payload,
      };
    case SearchActionTypes.UPDATE_INSURANCE_TYPE:
      return {
        ...state,
        visit_reason: action.payload,
      };
    case SearchActionTypes.UPDATE_DOCTORS:
      return {
        ...state,
        doctors: action.payload,
      };
    case SearchActionTypes.UPDATE_DOCTOR:
      return {
        ...state,
        doctor: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
