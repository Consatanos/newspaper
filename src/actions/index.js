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

const loadingVideos = (videos) => {
  return {
    type: 'LOADING_VIDEOS',
    payload: videos
  }
};

const loadingPosts = (posts) => {
  return {
    type: 'LOADING_POSTS',
    payload: posts
  }
};

const loadingNews = (news) => {
  return {
    type: 'LOADING_NEWS',
    payload: news
  }
};

const loadingFacts = (facts) => {
  return {
    type: 'LOADING_FACTS',
    payload: facts
  }
};

const loadingAithors = (authors) => {
  return {
    type: 'LOADING_AUTHORS',
    payload: authors
  }
};

const loadingComments = (comments) => {
  return {
    type: 'LOADING_COMMENTS':
    payload: comments
  }
}

export {
  testActions,
  loadingNavigation,
  loadingContactsFooter,
  loadingVideos,
  loadingPosts,
  loadingNews,
  loadingFacts,
  loadingAithors,
  loadingComments
};