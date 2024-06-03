import clsx from 'clsx'
import NextLink from 'next/link'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { SiLinkedin, SiHtmx, SiGithub } from 'react-icons/si'
import { siteConfig } from '@/config/site'
import { fontMono } from '@/config/fonts'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const Navigation = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: '!backdrop-blur-[1px] bg-coal bg-opacity-80 rounded-xl border-2 border-black shadow-xl',
        content: 'basis-1/5 sm:basis-full gap-3',
        brand: 'gap-3 max-w-fit',
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li">
          <NextLink
            className="flex justify-start items-center gap-3 text-color"
            href="/"
          >
            <SiHtmx size="30" />
            <div className={clsx(fontMono.variable, 'logo text-xl')}>
              <span className="sm:flex hidden">Dmitriy Chastukhin</span>
              <span className="sm:hidden">DC</span>
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="dark:text-primary dark:hover:text-white text-red hover:text-black transition-all"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
            className="text-color text-lg dark:hover:text-warning dark:hover:opacity-100 transition-all"
          >
            <SiLinkedin />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.github}
            aria-label="Github"
            className="text-color text-lg dark:hover:text-warning dark:hover:opacity-100 transition-all"
          >
            <SiGithub />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4 gap-3" justify="end">
        <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
          <SiLinkedin className="text-color text-lg" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <SiGithub className="text-color text-lg" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  )
}
