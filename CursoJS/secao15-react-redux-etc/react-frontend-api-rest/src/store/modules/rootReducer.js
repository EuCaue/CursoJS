// Combine all reducers, and export everything
import { combineReducers } from 'redux';
import exampleReducer from './examples/reducer';

export default combineReducers({
  exampleReducer,
});
