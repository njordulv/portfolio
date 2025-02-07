import { Link } from 'react-scroll'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@heroui/react'
import { SiLinkedin, SiHtmx, SiGithub } from 'react-icons/si'
import { siteConfig } from '@/config/site'
import { NavItem } from './NavItem'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const Navigation = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: '!backdrop-blur-[1px] bg-coal/80 rounded-xl border-2 border-black shadow-xl',
        content: 'basis-1/5 sm:basis-full gap-3',
        brand: 'gap-3 max-w-fit',
      }}
    >
      <NavbarContent justify="start" as="div">
        <NavbarBrand>
          <a
            className="flex justify-start items-center gap-3 text-color"
            href="/"
          >
            <SiHtmx size="30" />
            <div className="logo text-xl">
              <span className="sm:flex hidden">Dmitriy Chastukhin</span>
              <span className="sm:hidden">DC</span>
            </div>
          </a>
        </NavbarBrand>
        <NavbarBrand>
          <ul className="hidden lg:flex gap-4 justify-start ml-3">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <Link
                  to={item.href}
                  smooth={true}
                  className="dark:text-primary dark:hover:text-white text-red hover:text-black transition-all"
                  duration={500}
                  href={`#${item.href}`}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </ul>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-full gap-2" justify="end">
        <NavItem href={siteConfig.links.linkedin} label="LinkedIn">
          <SiLinkedin />
        </NavItem>
        <NavItem href={siteConfig.links.github} label="Github">
          <SiGithub />
        </NavItem>
        <NavbarItem className="flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  )
}
