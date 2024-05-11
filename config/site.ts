export type SiteConfig = typeof siteConfig

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
}
