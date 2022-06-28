// initialState
const initialState = {
  buttonClicked: false,
};

// Reducer
export default (action, state = initialState) => {
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
