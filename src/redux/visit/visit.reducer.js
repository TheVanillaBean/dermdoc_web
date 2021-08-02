import VisitActionTypes from './visit.types';

const INITIAL_STATE = {
  visit_data: null,
  isFetchingVisit: true,
  visitErrorMessage: undefined,
};

const visitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VisitActionTypes.FETCH_VISIT_START:
      return {
        ...state,
        isFetchingVisit: true,
      };
    case VisitActionTypes.FETCH_VISIT_SUCCESS:
      return {
        ...state,
        isFetchingVisit: false,
        visit_data: action.payload,
      };
    case VisitActionTypes.FETCH_VISIT_FAILURE:
      return {
        ...state,
        isFetchingVisit: false,
        visitErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default visitReducer;
