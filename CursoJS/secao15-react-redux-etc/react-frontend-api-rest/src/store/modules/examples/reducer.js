/* eslint-disable no-console */
/* eslint-disable default-param-last */
import * as types from '../types';

// initialState 💬
const initialState = {
  buttonClicked: false,
};

// Reducer 💬
export default (state = initialState, action) => {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS: {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      console.log('Sucesso');
      return newState;
    }
    case types.BUTTON_CLICKED_FAILURE: {
      console.log('Mensagem de erro');
      return state;
    }
    case types.BUTTON_CLICKED_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
};
