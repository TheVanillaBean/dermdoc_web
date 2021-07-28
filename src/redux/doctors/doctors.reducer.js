import DoctorActionTypes from './doctors.types';

const INITIAL_STATE = {
  doctorsList: null,
  doctor: null,
  isFetchingDoctor: true,
  isFetchingDoctorsList: true,
  doctorErrorMessage: undefined,
  doctorsListErrorMessage: undefined,
};

const doctorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //SINGLE DOCTOR
    case DoctorActionTypes.FETCH_DOCTOR_START:
      return {
        ...state,
        isFetchingDoctor: true,
      };
    case DoctorActionTypes.FETCH_DOCTOR_SUCCESS:
      return {
        ...state,
        isFetchingDoctor: false,
        doctor: action.payload,
      };
    case DoctorActionTypes.FETCH_DOCTOR_FAILURE:
      return {
        ...state,
        isFetchingDoctor: false,
        doctorErrorMessage: action.payload,
      };
    //DOCTORS LIST
    case DoctorActionTypes.FETCH_DOCTORS_LIST_START:
      return {
        ...state,
        isFetchingDoctorsList: true,
      };
    case DoctorActionTypes.FETCH_DOCTORS_LIST_SUCCESS:
      return {
        ...state,
        isFetchingDoctorsList: false,
        doctorsList: action.payload,
      };
    case DoctorActionTypes.FETCH_DOCTORS_LIST_FAILURE:
      return {
        ...state,
        isFetchingDoctorsList: false,
        doctorsListErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default doctorsReducer;
