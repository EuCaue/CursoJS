// Files for the actions for reducers 💬
import * as types from '../types';
// Login Actions
export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.BUTTON_CLICKED_SUCCESS,
    payload,
  };
}
export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}
