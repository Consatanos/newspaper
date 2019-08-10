const initialState = {
  tests: [],
  navigation: [],
  videos: [],
  posts: [],
  news: [],
  facts: [],
  authors: [],
  comments: [],
  contacts: [
    {
      name: 'phone',
      list: ['+43 5278 2883 884', '+53 345 7557 822112']
    },
    {
      name: 'email',
      list: ['contact@youremail.com']
    },
    {
      name: 'site',
      list: ['www.yoursitename.com']
    },
    {
      name: 'address',
      list: ['481 Creekside Lane Avila Beach, CA 93424']
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTIONS':
      return {
        ...state,
        tests: action.payload
      }
    case 'LOADING_NAVIGATION':
      return {
        ...state,
        navigation: action.payload
      }
    case 'LOADING_CONTACTS_FOOTER':
      return {
        ...state,
        contacts: action.payload
      }
    case 'LOADING_VIDEOS':
      return {
        ...state,
        videos: action.payload
      }
    case 'LOADING_POSTS':
      return {
        ...state,
        posts: action.payload
      }
    case 'LOADING_NEWS':
      return {
        ...state,
        news: action.payload
      }
    case 'LOADING_FACTS':
      return {
        ...state,
        facts: action.payload
      }
    case 'LOADING_AUTHORS':
      return {
        ...state,
        authors: action.payload
      }
    case 'LOADING_COMMENTS':
      return {
        ...state,
        comments: action.payload
      }

    default:
      return state;
  };
};

export default reducer;