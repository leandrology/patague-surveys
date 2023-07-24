import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconPhone,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
  IconMap2,
  IconZoomPan,
  IconWorldSearch,
  IconRoad,
  IconGeometry,
  IconSitemap
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  ProjectProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import geodeticImg from '~/assets/images/geodetic1.jpg';
import project1Img from '~/assets/images/project1.png';
import project2Img from '~/assets/images/project2.jpg';
import project3Img from '~/assets/images/project3.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';


// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Services',
      href: '/services',
    },
    {
      label: 'FAQs',
      href: '/faqs',
    },
    
    // {
    //   label: 'Menu',
    //   icon: IconChevronDown,
    //   links: [
    //     {
    //       label: 'About',
    //       href: '/about',
    //     },
    //     {
    //       label: 'Pricing',
    //       href: '/pricing',
    //     },
    //     {
    //       label: 'Contact us',
    //       href: '/contact',
    //     },
    //     {
    //       label: 'FAQs',
    //       href: '/faqs',
    //     },
    //     {
    //       label: 'Privacy Policy',
    //       href: '/privacy',
    //     },
    //     {
    //       label: 'Terms & Conditions',
    //       href: '/terms',
    //     },
    //   ],
    // },
    
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  // actions: [
  //   {
  //     text: 'Request a quotation',
  //     href: 'https://github.com/onwidget/tailnext',
  //     targetBlank: true,
  //     btnType: 'primary',
  //   },
  // ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Hero data
export const heroData: HeroProps = {
  title: <>Reliability and Assurance Beyond Expectation</>,
  subtitle: (
    <>
      <span>
        We are a team of experienced professionals providing high-quality surveying and geodetic services to clients
        across a wide range of industries. Our website is designed to help you learn more about our services, connect
        with our team of experts, and discover how we can help you achieve your goals.{' '}
      </span>
      {/* <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          TailNext
        </span>{' '}
        is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
      </span>{' '}
      It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
      optimization. */}
    </>
  ),
  callToAction: {
    text: 'Request a quotation',
    href: '/contact',
    // icon: IconPhone,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'About Us',
  subtitle:
    'Patague Land Surveying Services understand that land surveys are utilized for various purposes including real estate management and architectural or engineering design. Our surveys are cost-effective and informative, providing clients with detailed survey plans that highlight potential boundary disputes, encroachments, technical description errors, and the exact location of the land. This information is crucial in land development. Our engineering survey plans are created in close collaboration with engineers and architects, providing accurate information for their design needs. We continually strive to improve and enhance our systems to offer valuable information not just for present issues but also for future concerns that may arise for our clients.',
  callToAction: {
    text: 'Request a quotation',
    href: '/contact',
    // icon: IconPhone,
    // targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '#',
  },
  image: {
    src: hero2Img,
    alt: 'Hero',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What is a land survey, and why do I need one?',
      description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
    },
    {
      title: 'What types of surveys do you offer, and which one is right for my project?',
      description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
    },
    {
      title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
      description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
    },
    {
      title: 'What qualifications and certifications do your surveyors and engineers have?',
      description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
    },
    {
      title: 'What kind of equipment and technology do you use to conduct surveys?',
      description: `We use a variety of equipment and technologies, such as GPS, total stations, and aerial drones, to collect and analyze data for our surveys. We also use advanced software to process and visualize the data, allowing us to create precise and detailed maps and drawings.`,
    },
    {
      title: 'How much does a survey cost, and what factors can affect the price?',
      description: `The cost of a survey can vary depending on the type of survey, the size and complexity of the project, and other factors such as the location and accessibility of the survey area. We provide detailed and transparent pricing information upfront and work closely with our clients to ensure that the survey meets their needs while staying within their budget.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What is a land survey, and why do I need one?',
      description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
    },
    {
      title: 'What types of surveys do you offer, and which one is right for my project?',
      description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
    },
    {
      title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
      description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
    },
    {
      title: 'What qualifications and certifications do your surveyors and engineers have?',
      description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
    },
    {
      title: 'What kind of equipment and technology do you use to conduct surveys?',
      description: `We use a variety of equipment and technologies, such as GPS, total stations, and aerial drones, to collect and analyze data for our surveys. We also use advanced software to process and visualize the data, allowing us to create precise and detailed maps and drawings.`,
    },
    {
      title: 'How much does a survey cost, and what factors can affect the price?',
      description: `The cost of a survey can vary depending on the type of survey, the size and complexity of the project, and other factors such as the location and accessibility of the survey area. We provide detailed and transparent pricing information upfront and work closely with our clients to ensure that the survey meets their needs while staying within their budget.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'What is a land survey, and why do I need one?',
      description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
    },
    {
      title: 'What types of surveys do you offer, and which one is right for my project?',
      description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
    },
    {
      title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
      description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
    },
    {
      title: 'What qualifications and certifications do your surveyors and engineers have?',
      description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
    },
    {
      title: 'What kind of equipment and technology do you use to conduct surveys?',
      description: `We use a variety of equipment and technologies, such as GPS, total stations, and aerial drones, to collect and analyze data for our surveys. We also use advanced software to process and visualize the data, allowing us to create precise and detailed maps and drawings.`,
    },
    {
      title: 'How much does a survey cost, and what factors can affect the price?',
      description: `The cost of a survey can vary depending on the type of survey, the size and complexity of the project, and other factors such as the location and accessibility of the survey area. We provide detailed and transparent pricing information upfront and work closely with our clients to ensure that the survey meets their needs while staying within their budget.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What is a land survey, and why do I need one?',
          description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
        },
        {
          title: 'What types of surveys do you offer, and which one is right for my project?',
          description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
        },
        {
          title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
          description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
        },
        {
          title: 'What qualifications and certifications do your surveyors and engineers have?',
          description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
        },
        {
          title: 'What kind of equipment and technology do you use to conduct surveys?',
          description: `We use a variety of equipment and technologies, such as GPS, total stations, and aerial drones, to collect and analyze data for our surveys. We also use advanced software to process and visualize the data, allowing us to create precise and detailed maps and drawings.`,
        },
        {
          title: 'How much does a survey cost, and what factors can affect the price?',
          description: `The cost of a survey can vary depending on the type of survey, the size and complexity of the project, and other factors such as the location and accessibility of the survey area. We provide detailed and transparent pricing information upfront and work closely with our clients to ensure that the survey meets their needs while staying within their budget.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'What is a land survey, and why do I need one?',
          description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
        },
        {
          title: 'What types of surveys do you offer, and which one is right for my project?',
          description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
        },
        {
          title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
          description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
        },
        {
          title: 'What qualifications and certifications do your surveyors and engineers have?',
          description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'What is a land survey, and why do I need one?',
          description: `A land survey is a detailed map or drawing of a piece of land that shows its boundaries, dimensions, and other features. You may need a land survey for a variety of reasons, such as when buying or selling property, constructing a new building, or resolving property line disputes.`,
        },
        {
          title: 'What types of surveys do you offer, and which one is right for my project?',
          description: `We offer a range of surveys, including boundary surveys, topographic surveys, construction staking surveys, and more. The type of survey you need will depend on the specifics of your project, such as its location, purpose, and any relevant regulations.`,
        },
        {
          title: 'How long does a survey typically take to complete, and what factors can affect the timeline?',
          description: `The duration of a survey can vary depending on a number of factors, such as the size and complexity of the project, the availability of necessary information and equipment, and any weather-related delays. We strive to complete our surveys as efficiently as possible while maintaining the highest level of accuracy.`,
        },
        {
          title: 'What qualifications and certifications do your surveyors and engineers have?',
          description: `Our surveyors and engineers have a range of qualifications and certifications, including a degree in geodetic engineering or a related field, licensing from the appropriate regulatory bodies, and ongoing training to stay up-to-date on the latest techniques and technologies.`,
        },
        {
          title: 'What kind of equipment and technology do you use to conduct surveys?',
          description: `We use a variety of equipment and technologies, such as GPS, total stations, and aerial drones, to collect and analyze data for our surveys. We also use advanced software to process and visualize the data, allowing us to create precise and detailed maps and drawings.`,
        },
        
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Careers and Opportunities',
  subtitle:
    'We offer exposure to a diverse workload that provides excellent professional development with a future. Come join a great team at Patague Land Surveying Services.',
  callToAction: {
    text: 'Get template',
    href: '/contact',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Contact us',
      description: 'Aliquam sodales est lectus, quis.',
      href: '/contact',
    },
    {
      title: 'Learn more',
      description: 'Ad litora torquent per conubia class aptent taciti sociosqu.',
      href: '/',
    },
    {
      title: 'Submit your application',
      description: 'You may submit your CV here',
      href: 'mailto:business@patague.com',
    },
    // {
    //   title: 'Subscribe',
    //   description: 'You may submit your CV here:',
    //   form: {
    //     icon: IconMail,
    //     input: {
    //       type: 'email',
    //       name: 'email',
    //       autocomplete: 'email',
    //       placeholder: 'Enter your email address',
    //     },
    //     btn: {
    //       title: 'Subscribe',
    //       type: 'submit',
    //     },
    //   },
    // },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: <>Services</>,
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
    highlight: '',
  },
  items: [
    {
      title: 'Lot Surveys',
      description:
        'Also known as boundary surveys, are used to determine the precise boundaries of a property and identify any encroachments.',
      icon: IconMap2,
      link: {
        label: 'Learn More',
        href: '/services/lot-surveys',
      },
    },
    {
      title: 'Engineering Surveys',
      description:
        'Involve mapping the terrain and other physical features of a site to plan and design infrastructure projects.',
      icon: IconGeometry,
      link: {
        label: 'Learn More',
        href: '/services/engineering-surveys',
      },
    },
    {
      title: 'Vertical Surveys',
      description:
        'Vertical surveying involves measuring the elevations of points on the Earth surface and is used to create topographic maps.',
      icon: IconRoad,
      link: {
        label: 'Learn More',
        href: '/services/vertical-surveys',
      },
    },
    {
      title: 'Custom Surveys',
      description:
        'Custom surveys are surveys that are tailored to specific needs and requirements, and are designed to gather targeted information.',
      icon: IconZoomPan,
      link: {
        label: 'Learn More',
        href: '/services/custom-surveys',
      },
    },
    {
      title: 'Construction Surveys',
      description:
        'Process of measuring and mapping out the physical features of a construction site for building purposes.',
      icon: IconSitemap,
      link: {
        label: 'Learn More',
        href: '/services/construction-surveys',
      },
    },
    {
      title: 'Topographic Surveys',
      description:
        'Topographic surveys are used to map the contours and features of a piece of land, including natural and man-made features.',
      icon: IconWorldSearch,
      link: {
        label: 'Learn More',
        href: '/services/topographic-surveys',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
    subtitle:
      'We use the latest technology and solutions in EDM, laser, GPS/GNSS and drones to complete our services. Our services are aligned with the regulations of land surveying methods as mandated by the DENR.',
  },
  items: [
    {
      title: 'Lot Surveys',
      description:
        'Also known as boundary surveys, are used to determine the precise boundaries of a property and identify any encroachments.',
      icon: IconMap2,
      link: {
        // label: 'Learn More',
        href: '/services/lot-surveys',
      },
    },
    {
      title: 'Engineering Surveys',
      description:
        'Involve mapping the terrain and other physical features of a site to plan and design infrastructure projects.',
      icon: IconGeometry,
      link: {
        // label: 'Learn More',
        href: '/services/engineering-surveys',
      },
    },
    {
      title: 'Vertical Surveys',
      description:
        'Vertical surveying involves measuring the elevations of points on the Earth surface and is used to create topographic maps.',
      icon: IconRoad,
      link: {
        // label: 'Learn More',
        href: '/services/vertical-surveys',
      },
    },
    {
      title: 'Custom Surveys',
      description:
        'Custom surveys are surveys that are tailored to specific needs and requirements, and are designed to gather targeted information.',
      icon: IconZoomPan,
      link: {
        // label: 'Learn More',
        href: '/services/custom-surveys',
      },
    },
    {
      title: 'Construction Surveys',
      description:
        'Process of measuring and mapping out the physical features of a construction site for building purposes.',
      icon: IconSitemap,
      link: {
        // label: 'Learn More',
        href: '/services/construction-surveys',
      },
    },
    {
      title: 'Topographic Surveys',
      description:
        'Topographic surveys are used to map the contours and features of a piece of land, including natural and man-made features.',
      icon: IconWorldSearch,
      link: {
        // label: 'Learn More',
        href: '/services/topographic-surveys',
      },
    },
  ],
};

export const projectsData: ProjectProps = {
  header: {
    title: 'Projects',
    subtitle:
      'We can provide you different land survey services based on your needs. Showcased here are some projects we have delivered/completed to our delighted customers. For full list of our accomplishments, check out our Projects page.',
  },
  projects: [
    {
      title: 'San Juanico Bridge',
      subtitle:
        'The San Juanico Bridge is part of the Pan-Philippine Highway and stretches from Samar to Leyte across the San Juanico Strait in the Philippines. Its longest length is a steel girder viaduct built on reinforced concrete piers, and its main span is of an arch-shaped truss design.',
      interval: 2000,
      image: {
        src: project1Img,
        alt: 'San Juanico Bridge',
      },
    },
    {
      title: 'Four Lanes - Santiago City',
      subtitle:
        'Four Lanes Santiago, City is one of the popular Transportation Service located in Four Lanes ,Santiago listed under Local business in Santiago , Travel & Transportation in Santiago.',
      interval: 2000,
      image: {
        src: project2Img,
        alt: 'Four Lanes - Santiago City',
      },
    },
    {
      title: 'Northeastern College',
      subtitle:
        'The Northeastern College is a public, non-sectarian, coeducational secondary and higher education institution located in Santiago City, Philippines. The College offers a range of degrees at both graduate and post-graduate level.',
      interval: 2000,
      image: {
        src: project3Img,
        alt: 'Northeastern College',
      },
    },
  ],
};

export const projectsData2: ProjectProps = {
  header: {
    title: 'Projects',
  },
    projects: [
    {
      title: 'San Juanico Bridge',
      subtitle: 'The San Juanico Bridge is part of the Pan-Philippine Highway and stretches from Samar to Leyte across the San Juanico Strait in the Philippines. Its longest length is a steel girder viaduct built on reinforced concrete piers, and its main span is of an arch-shaped truss design.',
      interval: 2000,
      image: {
        src: project1Img,
        alt: 'San Juanico Bridge',
      },
    },
    {
      title: 'Four Lanes - Santiago City',
      subtitle: 'Four Lanes Santiago, City is one of the popular Transportation Service located in Four Lanes ,Santiago listed under Local business in Santiago , Travel & Transportation in Santiago.',
      interval: 2000,
      image: {
        src: project2Img,
        alt: 'Four Lanes - Santiago City',
      },
    },
    {
      title: 'Northeastern College',
      subtitle: 'The Northeastern College is a public, non-sectarian, coeducational secondary and higher education institution located in Santiago City, Philippines. The College offers a range of degrees at both graduate and post-graduate level.',
      interval: 2000,
      image: {
        src: project3Img,
        alt: 'Northeastern College',
      },
    },
  ]
}

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Projects',
    subtitle: 'We can provide you with different land survey services based on your needs. Showcased here are some projects we have delivered/completed to delighted customers.',
    // highlight: 'Projects',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Here are the steps for us to assist you with your geodetic needs:',
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Completed!',
      icon: IconCheck,
    },
  ],
  image: {
    src: geodeticImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Our Team',
    subtitle: 'Meet our skillful team members',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Engr. Yusef Harrelson Patague',
      occupation: 'CEO / Founder · Licensed Geodetic Engineer',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Engr. Yusef Harrelson Patague',
      },
      items: [
        {
          title: 'Know more on Facebook',
          icon: IconBrandFacebook,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Engr. Dodong Abay',
      occupation: 'President · Licensed Geodetic Engineer',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Engr. Dodong Abay',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Engr. Mike Angel Juera',
      occupation: 'Vice-President · Licensed Geodetic Engineer',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Engr. Mike Angel Juera',
      },
      items: [
        {
          title: 'Know more on Facebook',
          icon: IconBrandFacebook,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Engr. Jhoewmer Gapong',
      occupation: 'QA · Licensed Geodetic Engineer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Engr. Jhoewmer Gapong',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const testimonialData: TestimonialProps = {
  header: {
    title: (
      <>
        Testimonials
      </>
    ),
    subtitle:
      'What our customers are saying about our services',
    // highlight: 'Testimonial',
  },
  testimonials: [
    {
      name: 'Leander Josh Panganiban',
      occupation: 'Smart Thinking Production · Director',
      comment:
        'I have worked with many land surveying companies over the years and this one stands out as the best. Their knowledge, professionalism and attention to detail are unmatched. I highly recommend them to anyone in need of land surveying services.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandFacebook,
      href: '#',
    },
    {
      name: 'Hans Joshua Musa',
      occupation: 'Skin Gold Aesthetics · President',
      comment:
        'I recently hired this company for a land survey and was extremely satisfied with their work. They were prompt, efficient and dedicated to getting the job done right. I would definitely use them again in the future.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
    {
      name: 'Floralin Gumop-as',
      occupation: 'Kahitano Food Corporation · CEO',
      comment:
        'I was referred to this land surveying company by a friend and was not disappointed. They provided me with a comprehensive and detailed report that was invaluable in my decision-making process. I would highly recommend them to anyone in need of their services.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandFacebook,
      href: '#',
    },
    {
      name: 'Kristenz Stewart',
      occupation: 'Ayala Moles · CEO',
      comment:
        'I have worked with many land surveying companies over the years and this one stands out as the best. Their knowledge, professionalism and attention to detail are unmatched. I highly recommend them to anyone in need of land surveying services.',
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandFacebook,
      href: '#',
    },
    {
      name: 'Chelsi May Aggabao',
      occupation: 'Yellow Arch Corp · Founder',
      comment:
        'I was referred to this land surveying company by a friend and was not disappointed. They provided me with a comprehensive and detailed report that was invaluable in my decision-making process. I would highly recommend them to anyone in need of their services.',
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandFacebook,
      href: '#',
    },
    {
      name: 'Nesselyn Tan',
      occupation: 'PGH · Share Holder',
      comment:
        'I recently hired this company for a land survey and was extremely satisfied with their work. They were prompt, efficient and dedicated to getting the job done right. I would definitely use them again in the future.',
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      },
      icon: IconBrandTwitter,
      href: '#',
    },
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 2020,
      description: 'Year Established',
    },
    {
      title: 192,
      description: 'Completed Projects',
    },
    {
      title: 23,
      description: 'Trusted Clients',
    },
    {
      title: 6,
      description: 'Members',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Message Us',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['Greenland Homes Subd, Plaridel, Santiago City, Isabela, 3311, PH'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +63 (912) 345-7890', 'Office: (043) 123 4567', 'Mail: business@patague.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Message Us',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: business@patague.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 18:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    // radioBtns: {
    //   label: 'What is the reason for your contact?',
    //   radios: [
    //     {
    //       label: 'General inquiries',
    //     },
    //     {
    //       label: 'Technical help',
    //     },
    //     {
    //       label: 'Claims',
    //     },
    //     {
    //       label: 'Others',
    //     },
    //   ],
    // },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    // checkboxes: [
    //   {
    //     label: 'Have you read our privacy policy?',
    //     value: '',
    //   },
    //   {
    //     label: 'Do you want to receive monthly updates by email?',
    //     value: '',
    //   },
    // ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'Patague',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/about',
        },
        {
          label: 'Projects',
          href: '/projects',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Copyright © 2023 Patague Land Surveying Services · All Rights Reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    // {
    //   label: 'Terms & Conditions',
    //   href: '/terms',
    // },
    // {
    //   label: 'Privacy Policy',
    //   href: '/privacy',
    // },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['Greenland Homes Subd, Plaridel, Santiago City, Isabela, 3311, PH'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +63 (912) 345-7890', 'Office: (043) 123 4567'],
    },
    {
      title: 'Email',
      texts: ['Office: business@patague.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: 'https://www.twitter.com',},
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com', },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com', },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      Made in the Philippines · All Rights Reserved.
      {/* {' '} <span className="float-right mr-1.5 h-5 w-5 rounded-sm bg-[url(https://e7.pngegg.com/pngimages/643/90/png-clipart-philippine-flag-flag-of-the-philippines-emoji-filipino-philippines-english-flag.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span> */}
       
      
      {/* <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a> */}

    </div>
  ),
};
