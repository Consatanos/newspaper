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
    ],
    navigation: [
      {
        name: 'Politics',
        listLink: [
          {
            name: 'Business',
            link: '#Business'
          },
          {
            name: 'Markets',
            link: '#Markets'
          },
          {
            name: 'Tech',
            link: '#Tech'
          },
          {
            name: 'Luxury',
            link: '#Luxury'
          }
        ]
      },
      {
        name: 'Featured',
        listLink: [
          {
            name: 'Football',
            link: '#Football'
          },
          {
            name: 'Golf',
            link: '#Golf'
          },
          {
            name: 'Tennis',
            link: '#Tennis'
          },
          {
            name: 'Motorsport',
            link: '#Motorsport'
          },
          {
            name: 'Horseracing',
            link: '#Horseracing'
          },
          {
            name: 'Equestrian',
            link: '#Equestrian'
          },
          {
            name: 'Sailing',
            link: '#Sailing'
          },
          {
            name: 'Skiing',
            link: '#Skiing'
          }
        ]
      },
      {
        name: 'FAQ',
        listLink: [
          {
            name: 'Aviation',
            link: '#Aviation'
          },
          {
            name: 'Business',
            link: '#Business'
          },
          {
            name: 'Traveller',
            link: '#Traveller'
          },
          {
            name: 'Destinations',
            link: '#Destinations'
          },
          {
            name: 'Features',
            link: '#Features'
          },
          {
            name: 'Food/Drink',
            link: '#Food/Drink'
          },
          {
            name: 'Hotels',
            link: '#Hotels'
          },
          {
            name: 'Partner Hotels',
            link: '#Partner Hotels'
          }
        ]
      },
      {
        name: 'More',
        listLink: [
          {
            name: 'Fashion',
            link: '#Fashion'
          },
          {
            name: 'Design',
            link: '#Design'
          },
          {
            name: 'Architecture',
            link: '#Architecture'
          },
          {
            name: 'Arts',
            link: '#Arts'
          },
          {
            name: 'Autos',
            link: '#Autos'
          },
          {
            name: 'Luxury',
            link: '#Luxury'
          }
        ]
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
  getNavigation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.navigation)
      }, 500);
    });
  };
};