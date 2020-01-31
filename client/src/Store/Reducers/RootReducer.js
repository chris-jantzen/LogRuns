import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LogReducer from './LogReducer';

const RootReducer = combineReducers({
  auth: AuthReducer,
  log: LogReducer
});

export default RootReducer;
