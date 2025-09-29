import { Link } from 'react-router-dom'
import { Link as LinkTo } from 'react-scroll'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Navbar, NavbarContent, NavbarBrand, NavbarItem } from '@heroui/navbar'
import { SiLinkedin, SiHtmx, SiGithub } from 'react-icons/si'
import { siteConfig } from '@/config/site'
import { NavItem } from './NavItem'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const Navigation = () => {
  return (
    <Navbar
      position="sticky"
      className="h-16 mx-auto max-w-lg md:max-w-7xl pl-6 pr-6 !backdrop-blur-[1px] bg-coal/50 rounded-xl border-2 border-black shadow-xl"
    >
      <NavbarBrand>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              className="flex justify-start items-center gap-3 text-color"
              to="/"
            >
              <SiHtmx size="30" />
              <div className="logo text-xl">
                <span className="sm:flex hidden">{siteConfig.name}</span>
                <span className="sm:hidden">{siteConfig.nameShort}</span>
              </div>
            </Link>
          </m.div>
        </LazyMotion>
      </NavbarBrand>

      <NavbarContent as="div" className="lg:flex hidden">
        <LazyMotion features={domAnimation}>
          <m.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center items-center w-full"
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
      </NavbarContent>

      <NavbarContent className="flex gap-2 justify-end">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-2 justify-end"
          >
            <NavItem href={siteConfig.links.linkedin} label="LinkedIn">
              <SiLinkedin />
            </NavItem>
            <NavItem href={siteConfig.links.github} label="Github">
              <SiGithub />
            </NavItem>
            <NavbarItem className="flex">
              <ThemeSwitch />
            </NavbarItem>
          </m.div>
        </LazyMotion>
      </NavbarContent>
    </Navbar>
  )
}
