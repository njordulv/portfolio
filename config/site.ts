export type SiteConfig = typeof siteConfig
import { TbApi } from 'react-icons/tb'
import {
  SiHtml5,
  SiCss3,
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
  SiMysql,
  SiPostgresql,
  SiWordpress,
  SiFigma,
  SiSketch,
  SiAdobephotoshop,
  SiJira,
  SiTrello,
} from 'react-icons/si'

export const siteConfig = {
  name: 'Dmitriy Chastukhin',
  description: 'Portfolio using Next.js + Next UI',
  navItems: [
    {
      label: 'Home',
      href: '#hero',
    },
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
      label: 'Home',
      href: '#hero',
    },
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
  },
  techStackIcons: [
    { label: 'HTML', icon: SiHtml5 },
    { label: 'CSS', icon: SiCss3 },
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
    { label: 'MySQL', icon: SiMysql },
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'WordPress', icon: SiWordpress },
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
    ],
    'Markup languages:': ['HTML', 'CSS'],
    'CSS frameworks:': ['Bootstrap', 'Tailwind CSS'],
    'PHP Frameworks:': ['Symfony', 'WordPress'],
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
    'Server Technologies:': ['Node.js', 'API', 'Firebase'],
    'Design:': ['Figma', 'Sketch', 'Adobe Photoshop'],
    'Task Managers:': ['Jira', 'Trello'],
  },
}
