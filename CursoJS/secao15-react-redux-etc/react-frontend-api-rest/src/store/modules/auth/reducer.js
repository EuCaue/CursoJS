/* eslint-disable no-console */
/* eslint-disable default-param-last */
import * as types from '../types';

// initialState 💬
const initialState = {
  Open: false,
  token: false,
  user: {},
  isLoading: false,
};

// Login Reducer 💬
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
};
