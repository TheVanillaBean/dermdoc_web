import { SearchActionTypes } from './search.types';

const INITIAL_STATE = {
  zip_code: 'Enter Zipcode',
  insurance_brand: 'Select Insurance',
  visit_reason: 'Acne',
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.UPDATE_ZIP_CODE:
      return {
        ...state,
        zip_code: action.payload,
      };
    case SearchActionTypes.UPDATE_INSURANCE_TYPE:
      return {
        ...state,
        insurance_brand: action.payload,
      };
    case SearchActionTypes.UPDATE_VISIT_REASON:
      return {
        ...state,
        visit_reason: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
