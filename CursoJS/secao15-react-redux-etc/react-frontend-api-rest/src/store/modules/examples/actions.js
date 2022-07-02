// Files for the actions for reducers 💬
import * as types from '../types';

export function buttonClickedRequest() {
  return {
    type: types.BUTTON_CLICKED_REQUEST,
  };
}
export function buttonClickedSucess() {
  return {
    type: types.BUTTON_CLICKED_SUCCESS,
  };
}
export function buttonClickedFailure() {
  return {
    type: types.BUTTON_CLICKED_FAILURE,
  };
}
