import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aprg,
  iassure,
  ctgt
} from "../assets";

export const navLinks = [
  {
    id: "aboutstarbucks",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "APRG Technology India Pvt. Ltd",
    icon: aprg,
    iconBg: "#383E56",
    date: "August 2018 - February 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "iAssure International Technologies Pvt. Ltd.",
    icon: iassure,
    iconBg: "#E6DEDD",
    date: "March 2020 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Sr. Web Developer",
    company_name: "CTGT Innovations Pvt. Ltd",
    icon: ctgt,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ranjan proved me wrong.",
    name: "Pravin Gunjal",
    designation: "CEO",
    company: "APRG Technology",
    image: "https://media.licdn.com/dms/image/C5603AQGaS8G_Awy3RQ/profile-displayphoto-shrink_800_800/0/1517019807355?e=2147483647&v=beta&t=HXjAP9_EvEUdVtpJQUbP8kN1nI_pdGahtMR15cy0uw4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ranjan does.",
    name: "Ashish Naik",
    designation: "CEO and MD",
    company: "iAssure IT",
    image: "https://media.licdn.com/dms/image/C4E03AQG_RMTWvhHy9g/profile-displayphoto-shrink_800_800/0/1555394620545?e=2147483647&v=beta&t=rAnAiyPCswxNHIqsm3b27end5gIB8wVnyvjkGoOYQ7E",
  },
  {
    testimonial:
      "After Ranjan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Gaurav Agrawal",
    designation: "Co-Founder",
    company: "CTGT Innovations",
    image: "https://images.thecompanycheck.com/directorimage/gaurav_agarwal_470915.webp",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Raect Js",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Recuritement App",
    description:
      "Web application that recruiters use to manage end-to-end hiring on the move. This applications can help schedule upcoming interviews, view profiles, and leave feedback",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://www.careeratlas.in/",
  },
  {
    name: "Siemens PLM Teamcenter",
    description:
      "A comprehensive Product Lifecycle Management App that manages the complete journey of a product from initial ideation, development, service, and disposal.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.plm.automation.siemens.com/global/en/products/collaboration/active-workspace.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
