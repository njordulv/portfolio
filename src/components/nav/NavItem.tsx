import { Link, NavbarItem } from '@heroui/react'
import { NavProps } from '@/types/interfaces'

export const NavItem = ({ href, label, children }: NavProps) => {
  return (
    <NavbarItem className="flex">
      <Link
        isExternal
        href={href}
        aria-label={label}
        className="text-color text-lg p-1 dark:hover:text-yellow hover:text-red dark:hover:opacity-100 transition-all"
      >
        {children}
      </Link>
    </NavbarItem>
  )
}
