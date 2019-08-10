const initialState = {
  tests: [],
  navigation: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTIONS':
      return {
        tests: action.payload
      }
    case 'LOADING_NAVIGATION':
      return {
        navigation: action.payload
      }

    default:
      return state;
  };
};

export default reducer;