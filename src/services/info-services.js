export default class InfoService {
  data = {
    tests: [
      {
        id: 1,
        title: 'TEST 1'
      },
      {
        id: 2,
        title: 'TEST 2'
      }
    ]
  };

  getTests() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.tests)
      }, 500);
    });
  };
};