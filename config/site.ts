export type SiteConfig = typeof siteConfig
import { TbApi, TbSql } from 'react-icons/tb'
import { LiaOpencart } from 'react-icons/lia'
import { FaGuitar } from 'react-icons/fa6'
import { RiNetflixFill } from 'react-icons/ri'
import { BsMusicNoteBeamed, BsPlaystation } from 'react-icons/bs'
import { AiFillVideoCamera, AiFillYoutube } from 'react-icons/ai'
import { MdOutlineDirectionsBike, MdHiking } from 'react-icons/md'
import { GiPolarBear } from 'react-icons/gi'
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
  SiShadcnui,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNpm,
  SiBabel,
  SiWebpack,
  SiVite,
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiAuth0,
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
} from 'react-icons/si'

export const siteConfig = {
  name: 'Dmitriy Chastukhin | Portfolio',
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
      label: 'Projects',
      href: '#projects',
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
      'https://drive.google.com/uc?export=download&id=1hKDe_d2pRd9rWVpS_4mR4BY9q6QKQzCJ',
  },
  hobbies: [
    {
      id: '1',
      name: 'Music',
      description:
        'Creating tunes that speak to the soul and getting lost in melodies.',
      icon: BsMusicNoteBeamed,
    },
    {
      id: '2',
      name: 'Playing Guitar',
      description: 'Strumming chords and bringing the guitar strings to life.',
      icon: FaGuitar,
    },
    {
      id: '3',
      name: 'Visuals',
      description: 'Capturing moments through photography and videography.',
      icon: AiFillVideoCamera,
    },
    {
      id: '4',
      name: 'Cycling',
      description: 'Feeling the wind as I explore new horizons on my bike.',
      icon: MdOutlineDirectionsBike,
    },
    {
      id: '5',
      name: 'YouTube',
      description:
        'Exploring stories and topics, satisfying my curiosity online.',
      icon: AiFillYoutube,
    },
    {
      id: '6',
      name: 'Gaming',
      description:
        'Diving into immersive game worlds and extraordinary adventures.',
      icon: BsPlaystation,
    },
    {
      id: '7',
      name: 'Hiking',
      description: 'Exploring new trails and bonding with nature on hikes.',
      icon: MdHiking,
    },
    {
      id: '8',
      name: 'Films & Series',
      description:
        'Enjoying captivating films and binge-watching gripping series.',
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
    { label: 'Zustand', icon: GiPolarBear },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'Next UI', icon: SiNextui },
    { label: 'Chakra UI', icon: SiChakraui },
    { label: 'Material UI', icon: SiMui },
    { label: 'Shadcn-UI', icon: SiShadcnui },
    { label: 'Framer Motion', icon: SiFramer },
    { label: 'Git', icon: SiGit },
    { label: 'GitHub', icon: SiGithub },
    { label: 'GitLab', icon: SiGitlab },
    { label: 'npm', icon: SiNpm },
    { label: 'Babel', icon: SiBabel },
    { label: 'Webpack', icon: SiWebpack },
    { label: 'Vite', icon: SiVite },
    { label: 'Docker', icon: SiDocker },
    { label: 'Kubernetes', icon: SiKubernetes },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'API', icon: TbApi },
    { label: 'Firebase', icon: SiFirebase },
    { label: 'Supabase', icon: SiSupabase },
    { label: 'Next-Auth', icon: SiAuth0 },
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
    'Frontend Frameworks and Libraries:': [
      'Next.js',
      'React',
      'Redux',
      'Zustand',
    ],
    'UI Libraries and Frameworks:': [
      'Next UI',
      'Chakra UI',
      'Shadcn-UI',
      'Material UI',
      'Framer Motion',
    ],
    'Markup and Styling:': ['HTML', 'CSS', 'SASS'],
    'CSS Frameworks:': ['Bootstrap', 'Tailwind CSS'],
    'Backend Frameworks:': ['Symfony', 'Node.js'],
    'Databases, BaaS and Auth:': [
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'Next-Auth',
    ],
    'Development and DevOps Tools:': [
      'Git',
      'GitHub',
      'GitLab',
      'npm',
      'Babel',
      'Webpack',
      'Vite',
      'Docker',
      'Kubernetes',
    ],
    'CMS:': ['WordPress', 'Opencart'],
    'Design Tools:': ['Figma', 'Sketch', 'Adobe Photoshop'],
    'Project Management:': ['Jira', 'Trello'],
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
        'Worked with multi-brand web app architecture, integrating controllers, entities, services and components',
        'Implemented a Gulp-based system for front-end optimization and workflow efficiency',
        'Engineered localization system for multilingual support',
        'Crafted diverse assets like landings, functional units, promos, emails, checkout pages, i18n, etc.',
        'Collaborated with QA, design, SEO to ensure best practices implementation',
      ],
      color: 'warning',
    },
    {
      company: 'Independent Learning',
      year: 2023,
      position: 'React developer',
      list: [
        'Developing React applications with Next.js, TypeScript, and Redux Toolkit/Zustand',
        'Optimizing data fetching with SWR and implementing component-based architecture',
        'Building responsive UIs with Shadcn-UI, Tailwind CSS, and Framer Motion',
        'Integrating Supabase and Firebase for backend services and real-time features',
        'Implementing SSR and authentication with Next.js, Next-Auth and Supabase-Auth',
      ],
      color: 'pink',
    },
  ],
}
