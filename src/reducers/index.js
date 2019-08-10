const initialState = {
  tests: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTIONS':
      return {
        tests: action.payload
      }

    default:
      return state;
  };
};

export default reducer;