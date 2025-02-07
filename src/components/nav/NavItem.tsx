import { Link } from 'react-scroll'
import { NavbarItem } from '@heroui/navbar'
import { NavProps } from '@/types/interfaces'

export const NavItem = ({ href, label, children }: NavProps) => {
  return (
    <NavbarItem className="flex">
      <Link
        to={href}
        aria-label={label}
        smooth={true}
        duration={500}
        className="text-color text-lg p-1 dark:hover:text-yellow hover:text-red dark:hover:opacity-100 transition-all"
      >
        {children}
      </Link>
    </NavbarItem>
  )
}
