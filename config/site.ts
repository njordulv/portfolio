export type SiteConfig = typeof siteConfig
import { TbApi, TbSql } from 'react-icons/tb'
import { LiaOpencart } from 'react-icons/lia'
import { FaGuitar } from 'react-icons/fa6'
import { RiNetflixFill } from 'react-icons/ri'
import { BsMusicNoteBeamed, BsPlaystation } from 'react-icons/bs'
import { AiFillVideoCamera, AiFillYoutube } from 'react-icons/ai'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNextui,
  SiChakraui,
  SiMui,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNpm,
  SiYarn,
  SiBabel,
  SiWebpack,
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiFirebase,
  SiPhp,
  SiSymfony,
  SiPostgresql,
  SiWordpress,
  SiFigma,
  SiSketch,
  SiAdobephotoshop,
  SiJira,
  SiTrello,
  SiGmail,
  SiLinkedin,
  SiTelegram,
  SiHtmx,
} from 'react-icons/si'

export const siteConfig = {
  name: 'Dmitriy Chastukhin',
  description:
    "A front-end developer's portfolio specializing in React and Next.js",
  navItems: [
    {
      label: 'About Me',
      href: '#about',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Beyond Coding',
      href: '#beyond',
    },
    {
      label: 'Contacts',
      href: '#contacts',
    },
  ],
  navMenuItems: [
    {
      label: 'About Me',
      href: '#about',
    },
    {
      label: 'Skills',
      href: '#skills',
    },
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Beyond Coding',
      href: '#beyond',
    },
    {
      label: 'Contacts',
      href: '#contacts',
    },
  ],
  links: {
    github: 'https://github.com/njordulv',
    linkedin: 'https://www.linkedin.com/in/dmitriy-chastukhin',
    download:
      'https://drive.google.com/uc?export=download&id=1JhYXXGucvwM3x5EwNvGtogT3vH_QM4DC',
  },
  hobbies: [
    {
      id: 1,
      name: 'Music',
      description:
        'Getting lost in melodies and beats, creating tunes that speak to the soul',
      icon: BsMusicNoteBeamed,
    },
    {
      id: 2,
      name: 'Playing Guitar',
      description:
        'Strumming my guitar, letting the strings come alive with every chord',
      icon: FaGuitar,
    },
    {
      id: 3,
      name: 'Visuals',
      description: `Capturing life's fleeting moments through the lens, both still and moving, allowing me to immortalize memories and share stories visually`,
      icon: AiFillVideoCamera,
    },
    {
      id: 4,
      name: 'Cycling',
      description:
        'Feeling the wind in my face as I pedal down open roads, exploring new horizons', // Изменено описание для большей красочности
      icon: MdOutlineDirectionsBike,
    },
    {
      id: 5,
      name: 'YouTube',
      description:
        'Immersing myself in countless stories and topics through YouTube, fueling my curiosity and quenching my thirst for knowledge and entertainment',
      icon: AiFillYoutube,
    },
    {
      id: 6,
      name: 'Gaming',
      description:
        'Diving into the immersive worlds of my favorite games, escaping reality and becoming the hero of extraordinary adventures',
      icon: BsPlaystation,
    },
    {
      id: 7,
      name: 'Coding',
      description:
        'Bringing ideas to life through lines of code, building digital creations',
      icon: SiHtmx,
    },
    {
      id: 8,
      name: 'Films & Series',
      description:
        'Indulging in captivating narratives on the silver screen and binge-watching gripping series, escaping into other worlds through cinema',
      icon: RiNetflixFill,
    },
  ],
  contacts: [
    {
      title: 'Linkedin',
      subtitle: 'Dmitriy Chastukhin',
      link: 'https://www.linkedin.com/in/dmitriy-chastukhin',
      icon: SiLinkedin,
    },
    {
      title: 'Email',
      subtitle: 'njordulv@gmail.com',
      link: 'mailto:njordulv@gmail.com',
      icon: SiGmail,
    },
    {
      title: 'Github',
      subtitle: 'njordulv',
      link: 'https://github.com/njordulv',
      icon: SiGithub,
    },
    {
      title: 'Telegram',
      subtitle: '@hdimon',
      link: 'https://t.me/hdimon',
      icon: SiTelegram,
    },
  ],
  techStackIcons: [
    { label: 'HTML', icon: SiHtml5 },
    { label: 'CSS', icon: SiCss3 },
    { label: 'SASS', icon: SiSass },
    { label: 'Bootstrap', icon: SiBootstrap },
    { label: 'Tailwind CSS', icon: SiTailwindcss },
    { label: 'JavaScript', icon: SiJavascript },
    { label: 'TypeScript', icon: SiTypescript },
    { label: 'React', icon: SiReact },
    { label: 'Redux', icon: SiRedux },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'Next UI', icon: SiNextui },
    { label: 'Chakra UI', icon: SiChakraui },
    { label: 'Material UI', icon: SiMui },
    { label: 'Framer Motion', icon: SiFramer },
    { label: 'Git', icon: SiGit },
    { label: 'GitHub', icon: SiGithub },
    { label: 'GitLab', icon: SiGitlab },
    { label: 'npm', icon: SiNpm },
    { label: 'Yarn', icon: SiYarn },
    { label: 'Babel', icon: SiBabel },
    { label: 'Webpack', icon: SiWebpack },
    { label: 'Docker', icon: SiDocker },
    { label: 'Kubernetes', icon: SiKubernetes },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'API', icon: TbApi },
    { label: 'Firebase', icon: SiFirebase },
    { label: 'PHP', icon: SiPhp },
    { label: 'Symfony', icon: SiSymfony },
    { label: 'MySQL', icon: TbSql },
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'WordPress', icon: SiWordpress },
    { label: 'Opencart', icon: LiaOpencart },
    { label: 'Figma', icon: SiFigma },
    { label: 'Sketch', icon: SiSketch },
    { label: 'Adobe Photoshop', icon: SiAdobephotoshop },
    { label: 'Jira', icon: SiJira },
    { label: 'Trello', icon: SiTrello },
  ],
  techStackCategiries: {
    'Programming Languages:': ['JavaScript', 'TypeScript', 'PHP'],
    'JavaScript Libraries and Frameworks:': [
      'React',
      'Redux',
      'Next.js',
      'Next UI',
      'Chakra UI',
      'Material UI',
      'Framer Motion',
    ],
    'Markup and Styling Languages:': ['HTML', 'CSS', 'SASS'],
    'CSS Frameworks:': ['Bootstrap', 'Tailwind CSS'],
    'PHP Frameworks:': ['Symfony'],
    'Development Tools:': [
      'Git',
      'GitHub',
      'GitLab',
      'npm',
      'Yarn',
      'Babel',
      'Webpack',
      'Docker',
      'Kubernetes',
    ],
    'Databases:': ['MySQL', 'PostgreSQL'],
    'Server Technologies and BaaS:': ['Node.js', 'API', 'Firebase'],
    'CMS:': ['WordPress', 'Opencart'],
    'Design:': ['Figma', 'Sketch', 'Adobe Photoshop'],
    'Task Managers:': ['Jira', 'Trello'],
  },
  experience: [
    {
      company: 'TemplateMonster',
      year: 2013,
      department: 'Site2You',
      position: 'Webmaster',
      list: ['Web-mastering, supporting & maintaining websites'],
      color: 'primary',
    },
    {
      company: 'TemplateMonster',
      year: 2014,
      department: 'Coders',
      position: 'HTML Coder',
      list: ['Creating bootstrap & responsive templates'],
      color: 'secondary',
    },
    {
      company: 'TemplateMonster',
      year: 2016,
      department: 'ZEMEZ',
      position: 'Front-end developer',
      list: [
        'Template development for the following stores: Open Cart, osCommerce, Zen Cart',
        'Theme development for Wordpress',
      ],
      color: 'danger',
    },
    {
      company: 'Brainstack_',
      year: 2019,
      department: 'SEO Team',
      position: 'Front-end developer',
      list: [
        'Creating & maintaining variable blogs for corporate brands using Wordpress',
        'Theme development from scratch to deployment',
        'Custom theme customization using WP API',
        'Optimizing blog load speeds using Google PageSpeed tool',
      ],
      color: 'success',
    },
    {
      company: 'Brainstack_',
      year: 2021,
      department: 'Marketing Team',
      position: 'Front-end developer',
      list: [
        'Worked with a multi-brand web application architecture with dedicated controllers, entities, and services, alongside shared common components.',
        'Implemented a Gulp-based system for front-end optimization and workflow efficiency.',
        "Designed a localization system for multi-lingual support within the application's routing.",
        'Created various landings, functional units, promos, emails, checkout pages, i18n & etc.',
        'Handled front-end operations using Node.js and NPM, seamlessly integrated with back-end services.',
        'Collaborated with QA, design, SEO teams, and other units for optimal practice implementation.',
      ],
      color: 'warning',
    },
    {
      company: 'Independent Learning',
      year: 2023,
      position: 'React developer',
      list: [
        'Working on my personal projects on React, Redux Toolkit and JavaScript',
        'Implement updates using Next.js & TypeScript',
        'Utilize hooks for API integration with SWR',
        'Integrate UI component-based architecture',
        'Incorporate Firebase SDK for authentication, data storage, and cloud functions.',
        'Leverage Framer Motion library for creating smooth animations and transitions.',
      ],
      color: 'pink',
    },
  ],
}
