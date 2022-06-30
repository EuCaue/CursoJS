/* eslint-disable default-param-last */
// initialState
const initialState = {
  buttonClicked: false,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTON_CLICKED': {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    default: {
      return state;
    }
  }
};
