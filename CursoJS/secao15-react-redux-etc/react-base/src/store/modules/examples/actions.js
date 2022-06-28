// Files for the actions for reducer
import * as types from '../types';

export function clickButton() {
  return {
    type: types.BUTTON_CLICKED,
  };
}
