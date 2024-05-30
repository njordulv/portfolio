import { ContactsCard } from '@/types'
import Link from 'next/link'

export const Card = ({ title, subtitle, Icon, href }: ContactsCard) => {
  return (
    <Link
      href={href}
      className="w-full p-4 rounded-xl text-color border-1 shadow-xl border-black relative overflow-hidden group bg-coal"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-success to-success translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-6 -right-6 text-8xl drop-shadow-md dark:text-beige text-gray group-hover:text-beige group-hover:rotate-12 transition-all duration-300" />
      <Icon className="mb-2 text-2xl text-secondary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-color group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-zinc-400 group-hover:text-white relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  )
}
