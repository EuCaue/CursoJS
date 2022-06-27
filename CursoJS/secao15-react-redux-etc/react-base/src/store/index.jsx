/* eslint-disable default-param-last */
/* eslint-disable no-console */
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  buttonClicked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      console.log(`Estou ouvindo ${action.type}`);
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = configureStore({ reducer });

export default store;
