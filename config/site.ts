export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Dmitriy Chastukhin',
  description: 'Portfolio using Next.js + Next UI',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'About',
      href: '/about',
    },
  ],
  links: {
    github: 'https://github.com/njordulv',
  },
}
