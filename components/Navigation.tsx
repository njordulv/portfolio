import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { SiLinkedin, SiHtmx, SiGithub } from 'react-icons/si'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { fontMono } from '@/config/fonts'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const Navigation = () => {
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: '!backdrop-blur-0 bg-coal bg-opacity-80 rounded-xl border-2 border-black shadow-xl',
        content: 'basis-1/5 sm:basis-full gap-1 sm:gap-6',
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
              Dmitriy Chastukhin
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-primary hover:text-yellow transition-all"
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
          >
            <SiLinkedin className="text-color text-lg" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <SiGithub className="text-color text-lg" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
          <SiLinkedin className="text-color text-lg" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <SiGithub className="text-color text-lg" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                    ? 'danger'
                    : 'primary'
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
