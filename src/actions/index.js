const testActions = (tests) => {
  return {
    type: 'TEST_ACTIONS',
    payload: tests
  };
};
const loadingNavigation = (navigation) => {
  return {
    type: 'LOADING_NAVIGATION',
    payload: navigation
  };
};

export {
  testActions,
  loadingNavigation
};