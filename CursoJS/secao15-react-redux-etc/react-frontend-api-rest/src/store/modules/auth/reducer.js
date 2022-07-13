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
      newState.isLoading = false;
      return newState;
    }

    // if login fails, restores all the initialState to newState, and return, ensuring the user does not log in 💬
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...initialState };
      newState.isLoading = true;
      return newState;
    }

    default: {
      return state;
    }
  }
};
