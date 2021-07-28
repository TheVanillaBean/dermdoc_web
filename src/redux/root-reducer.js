import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import doctorsReducer from './doctors/doctors.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = { key: 'root', storage, whitelist: ['search'] };

const rootReducer = combineReducers({
  search: searchReducer,
  doctors: doctorsReducer,
});

export default persistReducer(persistConfig, rootReducer);
