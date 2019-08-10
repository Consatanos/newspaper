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
    videos: [
      {
        id: 1,
        imageUrl: 'bg-img/video1.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5BQr-j3BBzU'
      },
      {
        id: 2,
        imageUrl: 'bg-img/video2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5BQr-j3BBzU'
      },
      {
        id: 3,
        imageUrl: 'bg-img/video3.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5BQr-j3BBzU'
      },
      {
        id: 4,
        imageUrl: 'bg-img/video2.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5BQr-j3BBzU'
      },
      {
        id: 5,
        imageUrl: 'bg-img/video3.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=5BQr-j3BBzU'
      }
    ],
    news: [
      {
        id: 1,
        title: 'Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/1.jpg'
      },
      {
        id: 2,
        title: 'Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/2.jpg'
      },
      {
        id: 3,
        title: 'Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/3.jpg'
      },
      {
        id: 4,
        title: 'Eu metus sit amet odio sodales placer. Sed varius leo ac...',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/4.jpg'
      },
      {
        id: 5,
        title: 'Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/1.jpg'
      },
      {
        id: 6,
        title: 'Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/2.jpg'
      },
      {
        id: 7,
        title: 'Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/3.jpg'
      },
      {
        id: 8,
        title: 'Eu metus sit amet odio sodales placer. Sed varius leo ac...',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/4.jpg'
      }
    ],
    posts: [
      {
        id: 1,
        imageUrl: 'bg-img/13.jpg',
        category: 'Finance',
        title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '192',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 2,
        imageUrl: 'bg-img/14.jpg',
        category: 'Politics',
        title: 'Sed a elit euismod augue semper congue sit amet ac sapien.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '312',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 3,
        imageUrl: 'bg-img/15.jpg',
        category: 'Health',
        title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '392',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 4,
        imageUrl: 'bg-img/25.jpg',
        category: 'Finance',
        title: 'Financial news: A new company is born today at the stock market',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '392',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 5,
        imageUrl: 'bg-img/13.jpg',
        category: 'Finance',
        title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '192',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 6,
        imageUrl: 'bg-img/14.jpg',
        category: 'Politics',
        title: 'Sed a elit euismod augue semper congue sit amet ac sapien.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '312',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 7,
        imageUrl: 'bg-img/15.jpg',
        category: 'Health',
        title: 'Pellentesque mattis arcu massa, nec fringilla turpis eleifend id.',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '392',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
      },
      {
        id: 8,
        imageUrl: 'bg-img/25.jpg',
        category: 'Finance',
        title: 'Financial news: A new company is born today at the stock market',
        time: '7:00 AM',
        date: 'April 14',
        likeCount: '392',
        commentCount: '10',
        author: 'Christinne Williams',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu cursus nunc maximus. Integer convallis nisi nibh, et ornare neque ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo libero, vulputate vel nunc id, blandit feugiat sem.'
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

  getTests = async () => {
    console.log('test')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data.tests)
      }, 500);
    });
  };
  getInfo = async (fieldName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data[fieldName])
      }, 500);
    });
  }
};