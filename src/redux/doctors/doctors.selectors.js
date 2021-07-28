import { createSelector } from 'reselect';

const doctors = (state) => state.doctors;

export const selectDoctorErrorMessage = createSelector(
  [doctors],
  (doctors) => doctors.doctorErrorMessage
);

export const selectDoctorsListErrorMessage = createSelector(
  [doctors],
  (doctors) => doctors.doctorsListErrorMessage
);

export const selectDoctor = createSelector(
  [doctors],
  (doctors) => doctors.doctor
);

export const selectDoctorsList = createSelector(
  [doctors],
  (doctors) => doctors.doctorsList
);

export const selectIsDoctorFetching = createSelector(
  [doctors],
  (doctors) => doctors.isFetchingDoctor
);

export const selectIsDoctorsListFetching = createSelector(
  [doctors],
  (doctors) => doctors.isFetchingDoctorsList
);
