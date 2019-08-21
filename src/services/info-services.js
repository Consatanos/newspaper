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
        imageUrl: 'bg-img/1.jpg',
        linkUrl: '/1'
      },
      {
        id: 2,
        title: 'Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/2.jpg',
        linkUrl: '/2'
      },
      {
        id: 3,
        title: 'Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/3.jpg',
        linkUrl: '/3',
      },
      {
        id: 4,
        title: 'Eu metus sit amet odio sodales placer. Sed varius leo ac...',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/4.jpg',
        linkUrl: '/4',
      },
      {
        id: 5,
        title: 'Amet, consectetur adipiscing elit. Nam eu metus sit amet odio sodales.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/1.jpg',
        linkUrl: '/5',
      },
      {
        id: 6,
        title: 'Consectetur adipiscing elit. Nam eu metus sit amet odio sodales placer.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/2.jpg',
        linkUrl: '/6',
      },
      {
        id: 7,
        title: 'Adipiscing elit. Nam eu metus sit amet odio sodales placer. Sed varius leo.',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/3.jpg',
        linkUrl: '/7',
      },
      {
        id: 8,
        title: 'Eu metus sit amet odio sodales placer. Sed varius leo ac...',
        date: 'April 14, 2018',
        imageUrl: 'bg-img/4.jpg',
        linkUrl: '/8',
      }
    ],
    facts: [
      {
        id: 1,
        counter: '12',
        title: 'News Article',
        text: 'Donec turpis erat, scelerisq'
      },
      {
        id: 2,
        counter: '45',
        title: 'Reporters',
        text: 'Donec turpis erat, scelerisq'
      },
      {
        id: 3,
        counter: '25',
        title: 'Awards Won',
        text: 'Donec turpis erat, scelerisq'
      },
      {
        id: 4,
        counter: '17',
        title: 'Years Old',
        text: 'Donec turpis erat, scelerisq'
      }
    ],
    authors: [
      {
        id: 1,
        name: 'James Williams',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t1.jpg'
      },
      {
        id: 2,
        name: 'Christinne Smith',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t2.jpg'
      },
      {
        id: 3,
        name: 'Alicia Dormund',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t3.jpg'
      },
      {
        id: 4,
        name: 'Steve Duncan',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t4.jpg'
      },
      {
        id: 5,
        name: 'James Williams',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t5.jpg'
      },
      {
        id: 6,
        name: 'Christinne Smith',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t6.jpg'
      },
      {
        id: 7,
        name: 'Alicia Dormund',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t7.jpg'
      },
      {
        id: 8,
        name: 'Steve Duncan',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t8.jpg'
      },
      {
        id: 9,
        name: 'James Williams',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t5.jpg'
      },
      {
        id: 10,
        name: 'Christinne Smith',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t6.jpg'
      },
      {
        id: 11,
        name: 'Alicia Dormund',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t7.jpg'
      },
      {
        id: 12,
        name: 'Steve Duncan',
        position: 'Senior Editor',
        imageUrl: 'bg-img/t8.jpg'
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
    comments: [
      {
        id: 1,
        imageUrl: 'bg-img/29.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 2,
        imageUrl: 'bg-img/30.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 3,
        imageUrl: 'bg-img/31.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 4,
        imageUrl: 'bg-img/32.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 5,
        imageUrl: 'bg-img/29.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 6,
        imageUrl: 'bg-img/30.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 7,
        imageUrl: 'bg-img/31.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
      },
      {
        id: 8,
        imageUrl: 'bg-img/32.jpg',
        name: 'Jamie Smith',
        position: 'Facebook is offering facial recognition...',
        text: 'Donec turpis erat, scelerisque id euismod sit amet, fermentum vel dolor. Nulla facilisi. Sed pellen tesque lectus et accu msan aliquam. Fusce lobortis cursus quam, id mattis sapien.',
        date: '06:34 am, April 14, 2018'
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
      }, 0);
    });
  }
};