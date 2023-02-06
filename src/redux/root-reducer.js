import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import checkoutReducer from './checkout/checkout.reducer';
import questionnaireReducer from './questionnaire/questionnaire.reducer';
import userReducer from './user/user.reducer';
import visitReducer from './visit/visit.reducer';

const persistConfig = { key: 'root', storage, whitelist: ['search'] };

const rootReducer = combineReducers({
  visit: visitReducer,
  questionnaire: questionnaireReducer,
  user: userReducer,
  checkout: checkoutReducer,
});

export default persistReducer(persistConfig, rootReducer);
