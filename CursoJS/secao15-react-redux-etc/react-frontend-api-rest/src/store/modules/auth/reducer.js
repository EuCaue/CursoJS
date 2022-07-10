/* eslint-disable no-console */
/* eslint-disable default-param-last */
import * as types from '../types';

// initialState 💬
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// Auth Reducer 💬
export default (state = initialState, action) => {
  switch (action.type) {
    // If the user log in with success, copies state to newState, and set the variables for confirming that is  logged 💬
    // And return the newState
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    // if login fails, restores all the initialState to newState, and return, ensuring the user does not log in 💬
    case types.LOGIN_FAILURE: {
      console.log('reduceR', action.payload);
      const newState = { ...initialState };
      return newState;
    }

    default: {
      return state;
    }
  }
};
