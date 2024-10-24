import { Link } from '@nextui-org/link'
import { NavbarItem } from '@nextui-org/navbar'
import { NavProps } from '@/types/interfaces'

export const NavItem = ({ href, label, children }: NavProps) => {
  return (
    <NavbarItem className="flex">
      <Link
        isExternal
        href={href}
        aria-label={label}
        className="text-color text-lg dark:hover:text-warning dark:hover:opacity-100 transition-all"
      >
        {children}
      </Link>
    </NavbarItem>
  )
}
