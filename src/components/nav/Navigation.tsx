import { Link } from 'react-router-dom'
import { Link as LinkTo } from 'react-scroll'
import { m, LazyMotion, domAnimation } from 'framer-motion'
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
        base: 'mx-auto max-w-lg md:max-w-7xl !backdrop-blur-[1px] bg-coal/50 rounded-xl border-2 border-black shadow-xl',
        content: 'basis-1/5 sm:basis-full gap-3',
        brand: 'gap-3 max-w-fit',
      }}
    >
      <NavbarContent justify="start" as="div">
        <NavbarBrand>
          <Link
            className="flex justify-start items-center gap-3 text-color"
            to="/"
          >
            <SiHtmx size="30" />
            <div className="logo text-xl">
              <span className="sm:flex hidden">Dmitriy Chastukhin</span>
              <span className="sm:hidden">DC</span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" as="div">
        <NavbarBrand>
          <LazyMotion features={domAnimation}>
            <m.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:flex gap-4 justify-start"
            >
              {siteConfig.navItems.map((item) => (
                <NavbarItem key={item.href}>
                  <LinkTo
                    to={item.href}
                    smooth={true}
                    className="dark:text-primary dark:hover:text-white text-red hover:text-black transition-all"
                    duration={500}
                    href={`#${item.href}`}
                  >
                    {item.label}
                  </LinkTo>
                </NavbarItem>
              ))}
            </m.ul>
          </LazyMotion>
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
