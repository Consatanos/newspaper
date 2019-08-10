const testActions = (tests) => {
  return {
    type: 'TEST_ACTIONS',
    payload: tests
  };
};

export {
  testActions
};