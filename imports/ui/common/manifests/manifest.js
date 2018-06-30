export const manifest = {
  title: 'titan.io',
  slides: [
    {
      headline: '',
      content: ''
    }
  ],
  categories: [
    {
      icon: {
        name: 'users',
        type: 'fal'
      },
      name: 'Team',
      path: '/insights/social'
    },
    {
      icon: {
        name: 'browser',
        type: 'fal'
      },
      name: 'Web',
      path: '/insights/web'
    },
    {
      icon: {
        name: 'database',
        type: 'fal'
      },
      name: 'Data',
      path: '/insights/data'
    },
    {
      icon: {
        name: 'cloud',
        type: 'fal'
      },
      name: 'Cloud',
      path: '/insights/cloud'
    },
    {
      icon: {
        name: 'dna',
        type: 'fal'
      },
      name: 'AI',
      path: '/insights/ai'
    }
  ],
  ads: [
    {
      direction: 'ltr',
      left: {
        alt: 'team delivery',
        src: './images/team1-1x.webp',
        type: 'image'
      },
      right: {
        containerProps: {
          style: {
            // backgroundColor: '#a6a6a6'
          }
        },
        link: {
          text: 'More about team',
          path: '/insights/team'
        },
        text: 'Our effective consultants increase your project velocity so that your business delivers innovations faster',
        type: 'textWithButton',
      }
    },
    {
      direction: 'rtl',
      left: {
        alt: 'web development',
        src: './images/product1-1x.webp',
        type: 'image'
      },
      right: {
        containerProps: {
          style: {
            // backgroundColor: '#3e7859'
          }
        },
        link: {
          text: 'More about web',
          path: '/insights/web'
        },
        text: 'Choose our cutting-edge design system or advanced tools to accelerate and transform your business',
        type: 'textWithButton'
      }
    },
    {
      direction: 'ltr',
      left: {
        alt: 'data organization',
        src: './images/organize1-1x.webp',
        type: 'image'
      },
      right: {
        containerProps: {
          style: {
            // backgroundColor: '#dc8264'
          }
        },
        link: {
          text: 'More about data',
          path: '/insights/data'
        },
        text: 'With our data solutions, your business can quickly search and organize its data',
        type: 'textWithButton'
      }
    },
    {
      direction: 'rtl',
      left: {
        alt: 'cloud',
        src: './images/cloud-1x.webp',
        type: 'image'
      },
      right: {
        link: {
          text: 'More about cloud',
          path: '/insights/cloud'
        },
        text: 'From content delivery to datacenter infrastructure, we can get your cloud operations up and running',
        type: 'textWithButton'
      }
    },
    {
      direction: 'ltr',
      left: {
        containerProps: {
          style: {
            // backgroundColor: '#333'
          }
        },
        typographyProps: {
          style: {
            color: 'white',
          }
        },
        text: '',
        type: 'text'
      },
      right: {
        containerProps: {
          style: {
            // backgroundColor: '#5a466e'
          }
        },
        link: {
          text: 'More about ai',
          path: '/insights/ai'
        },
        text: 'With our data solutions, your business can quickly search and organize information',
        type: 'textWithButton',
        typographyProps: {
          style: {
            // color: 'white'
          }
        }
      }
    }
  ]
};

export const ourStory = `We like to think are values stem from a moral constant,
  but more directly, they come from our story. Titan.io was founded in 2018 by
  Ross Sheppard who had a vision of changing the way the world does business
  with its consumers - with humanity. After working at Fortune 50
  companies like Dell, HP, and HPE, he realized the inefficiencies of huge
  corporations - inorganic acquisitional growth, slow-moving decisions, and gaps
  between purely technical and business groups. At his last corporate job and
  always willing to solve problems, Ross came up with a vision to change the
  way HPE did business. It was a bold plan, yet a necessary one. It implemented
  a flatter and atomic corporate structure, resolved difficulties of merging
  technologies from acquisitions with modular architectures across the board,
  implemented continuous integration and deployment techniques, reformed
  incentive programs, and much, much more.

  A couple of months after his plan that was dubbed the Fusion Strategy was
  presented, Ross was let go from HPE. titan.io is the company borne from that
  plan. He felt and feels to this day that corporate America needed to be changed.

  Companies today care about one thing - the bottom line. It makes sense,
  because all stakeholders are affected by the
`;