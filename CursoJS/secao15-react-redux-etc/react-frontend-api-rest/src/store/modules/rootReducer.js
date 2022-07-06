// Combine all reducers, and export everything
import { combineReducers } from 'redux';
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
