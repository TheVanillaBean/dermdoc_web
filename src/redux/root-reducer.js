import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import doctorsReducer from './doctors/doctors.reducer';
import questionnaireReducer from './questionnaire/questionnaire.reducer';
import searchReducer from './search/search.reducer';
import visitReducer from './visit/visit.reducer';

const persistConfig = { key: 'root', storage, whitelist: ['search'] };

const rootReducer = combineReducers({
  search: searchReducer,
  doctors: doctorsReducer,
  visit: visitReducer,
  questionnaire: questionnaireReducer,
});

export default persistReducer(persistConfig, rootReducer);
