import { createSelector } from 'reselect';

const visit = (state) => state.visit;

export const selectVisitErrorMessage = createSelector(
  [visit],
  (visit) => visit.visitErrorMessage
);

export const selectIsVisitFetching = createSelector(
  [visit],
  (visit) => visit.isFetchingVisit
);

export const selectVisit = createSelector([visit], (visit) => visit.visit_data);
