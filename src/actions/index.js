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
const loadingContactsFooter = (contacts) => {
  return {
    type: 'LOADING_CONTACTS_FOOTER',
    payload: contacts
  };
};

export {
  testActions,
  loadingNavigation,
  loadingContactsFooter
};