export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Home Maker',
    position: 'Tharas Kitchen',
    img: 'assets/woman.png',
    review:
      'Working with Thomas was a fantastic experience. He Built modern website for my small home business and a user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'VV Reddy',
    position: 'Vision Consultancy',
    img: 'assets/user.png',
    review:
      'Thomas\'s expertise in web development is truly impressive. He delivered a user friendly and a stunning website for our services, and our consultancy services have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Vishwa',
    position: 'CTR',
    img: 'assets/user.png',
    review:
      'I can’t say enough good things about Thomas. He was able to take our hotel ideas and turn them into a seamless, functional website. His creativity abilities are outstanding.',
  },
];

export const myProjects = [
  {
    title: 'Vision Consultancy',
    desc: 'Developed a dynamic platform empowering users to clarify their strategic vision, set actionable goals, and connect with expert consultants for personalized guidance.',
    subdesc:
      'Developed with React.js, Tailwind CSS, and modern ecommerce best practices, GearXpert is designed for vehicle enthusiasts and sellers.',
    href: 'https://vision-consultancy-six.vercel.app/',
    texture: '/textures/project/vision.png',
    logo: '/assets/vlogo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
     
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
      {
        id: 4,
        name: 'gsap',
        path: '/assets/gsap.png',
      },
    ],
  },
  {
    title: 'Tharas Kitchen',
    desc: 'An eCommerce website supporting Home Made Dishes in order to a Small Business',
    subdesc:
      'Frontend platform built with Love for The Food.',
    href: 'https://tharas-kitchen.vercel.app/',
    texture: '/textures/project/tkitchen.png',
    logo: '/assets/Tlogo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      {
        id: 5,
        name: 'mongodb.js',
        path: '/assets/mongodb.png',
      },
    ],
  }
  ,
  {
    title: 'CTR - Chikkana Tiffin Room',
    desc: 'Crafted a user-friendly online presence for Chikkanna Tiffin Room, showcasing their menu and classic tiffin offerings to attract and inform customers.',
    subdesc:
      'A Frontend Webiste with responsive design and smooth animations.',
    href: 'https://ctr-five.vercel.app/',
    texture: '/textures/project/ctr.png',
    logo: '/assets/ctrlogo.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 4,
        name: 'express.js',
        path: '/assets/express.png',
      },
      {
        id: 5,
        name: 'mongodb.png',
        path: '/assets/mongodb.png',
      },
    ],
  },
 

 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'FreeLancer',
    pos: 'Full-Stack Web Developer',
    duration: 'Present',
    title: "As a full-stack web developer, I build robust, end-to-end solutions, enjoying the freedom to bring diverse digital visions to life.",
    icon: '/assets/freelancer.png',
    animation: 'victory',
  },

 
];
