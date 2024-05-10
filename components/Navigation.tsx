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
import NextLink from 'next/link'
import { FaCode } from 'react-icons/fa6'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { fontMono, fontSans } from '@/config/fonts'

import { GithubIcon } from '@/components/icons'
import { ThemeSwitch } from '@/components/ThemeSwitch'

export const Navigation = () => {
  return (
    <NextUINavbar
      isBlurred
      maxWidth="xl"
      position="sticky"
      classNames={{
        base: '!backdrop-blur-0 bg-coal bg-opacity-80 rounded-xl border-1 border-charcoal',
        content: 'basis-1/5 sm:basis-full',
        brand: 'gap-3 max-w-fit',
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li">
          <NextLink
            color="default"
            className="flex justify-start items-center gap-2"
            href="/"
          >
            <FaCode size="26" />
            <div className={clsx(fontMono.variable, 'logo text-lg')}>
              Dmitriy Chastukhin
            </div>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className="text-primary hover:text-warning transition-all"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-beige" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-beige" />
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
