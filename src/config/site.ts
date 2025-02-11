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
  SiReactquery,
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
  SiWebpack,
  SiVite,
  SiVitest,
  SiDocker,
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
  name: 'Dmitriy Chastukhin Front-End Developer',
  title: 'Dmitriy Chastukhin | Portfolio',
  description:
    "A front-end developer's portfolio specializing in React and Next.js",
  keywords: [
    'portfolio',
    'frontend-developer',
    'web-developer',
    'reactjs',
    'react-query',
    'vite.dev',
    'typescript',
    'heroui',
    'framer-motion',
    'github-api',
  ],
  author: 'Njordr',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    viewportFit: 'cover' as const,
    userScalable: false,
  },
  siteUrl: 'https://njordulv-portfolio.vercel.app',
  repos: 'https://api.github.com/users/njordulv/repos?per_page=24',
  errorData: `Ooops, looks like your API key isn't okay`,
  navItems: [
    {
      label: 'About Me',
      href: 'about',
    },
    {
      label: 'Skills',
      href: 'skills',
    },
    {
      label: 'Experience',
      href: 'experience',
    },
    {
      label: 'Projects',
      href: 'projects',
    },
    {
      label: 'Beyond Coding',
      href: 'beyond',
    },
    {
      label: 'Contacts',
      href: 'contacts',
    },
  ],
  links: {
    github: 'https://github.com/njordulv',
    linkedin: 'https://www.linkedin.com/in/dmitriy-chastukhin',
    download:
      'https://drive.google.com/uc?export=download&id=1bqsbXmIdN7RS3KliFGX6nphzy3eJYR_b',
  },
  about: {
    title: "Hi, I'm Dmitriy,",
    role: 'A passionate front-end developer.',
    subtitle:
      'I create engaging, high-performance web applications with modern technologies.',
    contactText: 'Contact me',
    contactAria: 'Navigate to Contacts section',
    downloadText: 'Download CV',
    text1:
      'This portfolio is a testament to my skills—designed from the ground up using my favorite stack.',
    text2:
      'But I don’t stop there. I’m always exploring new tools and frameworks to stay ahead of industry trends and bring even more value to the projects I work on.',
    text3: 'Let’s connect and build something great together!',
  },
  techCode: [
    {
      name: 'React',
      color: 'primary',
    },
    {
      name: 'Next.js',
      color: 'secondary',
    },
    {
      name: 'Tailwind CSS',
      color: 'success',
    },
    {
      name: 'Framer Motion',
      color: 'danger',
    },
  ] as const,
  techStack: [
    {
      id: '1',
      name: 'Next.js',
      rotate: '2.5deg',
      link: 'https://njordulv-habitifier.vercel.app/',
      color: 'bg-blue',
      icon: SiNextdotjs,
    },
    {
      id: '2',
      name: 'React',
      rotate: '3.3deg',
      link: 'https://njordulv-stopwatch.netlify.app/',
      color: 'bg-secondary',
      icon: SiReact,
    },
    {
      id: '3',
      name: 'Tailwind CSS',
      rotate: '-3.5deg',
      link: 'https://cinemapp-movie.vercel.app/',
      color: 'bg-success',
      icon: SiTailwindcss,
    },
    {
      id: '4',
      name: 'Framer Motion',
      rotate: '-2.5deg',
      link: 'https://njordulv-gallows.netlify.app/',
      color: 'bg-pink',
      icon: SiFramer,
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
    { label: 'React Query', icon: SiReactquery },
    { label: 'Redux', icon: SiRedux },
    { label: 'Zustand', icon: GiPolarBear },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'Hero UI', icon: SiNextui },
    { label: 'Chakra UI', icon: SiChakraui },
    { label: 'Material UI', icon: SiMui },
    { label: 'Shadcn-UI', icon: SiShadcnui },
    { label: 'Framer Motion', icon: SiFramer },
    { label: 'Git', icon: SiGit },
    { label: 'GitHub', icon: SiGithub },
    { label: 'GitLab', icon: SiGitlab },
    { label: 'npm', icon: SiNpm },
    { label: 'Webpack', icon: SiWebpack },
    { label: 'Vite', icon: SiVite },
    { label: 'Vitest', icon: SiVitest },
    { label: 'Docker', icon: SiDocker },
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
      'React Query',
      'Redux',
      'Zustand',
    ],
    'UI Libraries and Frameworks:': [
      'Hero UI',
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
      'Webpack',
      'Vite',
      'Vitest',
      'Docker',
    ],
    'CMS:': ['WordPress', 'Opencart'],
    'Design Tools:': ['Figma', 'Sketch', 'Adobe Photoshop'],
    'Project Management:': ['Jira', 'Trello'],
  },

  experience: [
    {
      company: 'TemplateMonster',
      year: '2013',
      department: 'Site2You',
      position: 'Webmaster',
      list: ['Web-mastering, supporting & maintaining websites'],
      color: 'primary',
    },
    {
      company: 'TemplateMonster',
      year: '2014',
      department: 'Coders',
      position: 'HTML Coder',
      list: ['Creating bootstrap & responsive templates'],
      color: 'secondary',
    },
    {
      company: 'TemplateMonster',
      year: '2016',
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
      year: '2019',
      department: 'SEO Team',
      position: 'Front-end developer',
      list: [
        'Developed and maintained 20+ WordPress blogs for corporate brands, ensuring high-quality user experiences and SEO optimization.',
        'Built custom themes from scratch and deployed them, integrating with the WordPress API for enhanced functionality.',
        'Improved site performance by optimizing load speeds, achieving 30% faster load time according to Google PageSpeed Insights.',
      ],
      color: 'success',
    },
    {
      company: 'Brainstack_',
      year: '2021',
      department: 'Marketing Team',
      position: 'Front-end developer',
      list: [
        'Developed and integrated both front-end and back-end components for a multi-brand web application, improving overall user experience and system efficiency.',
        'Designed and implemented localization systems, enabling seamless multilingual support and boosting user engagement.',
        'Created responsive and visually engaging landing pages, promotional assets, and checkout pages, resulting in increased conversion rates and enhanced user satisfaction.',
        'Worked closely with QA, design, and SEO teams to ensure the implementation of best practices and maintain high-quality standards across projects.',
      ],
      color: 'warning',
    },
    {
      company: 'Independent Learning',
      year: '2023 - Present',
      position: 'React developer',
      list: [
        'Built scalable React applications with Next.js, TypeScript, and Redux Toolkit/Zustand, improving user experience and app performance.',
        'Developed responsive UIs using various design systems, including Shadcn-UI, Tailwind CSS, Chakra UI, MUI, and HeroUI, ensuring compatibility across devices and enhancing the user experience.',
        'Integrated Supabase and Firebase for backend services, implementing real-time features and secure authentication.',
        'Optimized data fetching using SWR and React Query, resulting in faster load times and better user interaction.',
      ],
      color: 'pink',
    },
  ],
  projectsListVariants: {
    offscreen: {},
    onscreen: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  },
  projectsItemVariants: {
    offscreen: {
      opacity: 0,
      rotate: -6,
      y: 30,
    },
    onscreen: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  },
  progressVariants: {
    hidden: { opacity: 0, left: -13 },
    show: {
      opacity: 1,
      left: 2,
      transition: {
        type: 'ease',
        duration: 0.5,
        delayChildren: 0.5,
      },
    },
  },
  bubbles: [
    { x: [5, 6], size: 'w-[8px] h-[8px]', duration: 10 },
    { x: [8, 7], size: 'w-[6px] h-[6px]', duration: 8 },
    { x: [2, 2], size: 'w-[5px] h-[5px]', duration: 6 },
    { x: [5, 9], size: 'w-[4px] h-[4px]', duration: 4 },
    { x: [3, 0], size: 'w-[3px] h-[3px]', duration: 3 },
  ],
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
}
