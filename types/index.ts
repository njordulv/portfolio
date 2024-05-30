import { SVGProps } from 'react'
import { IconType } from 'react-icons'
import { MotionProps } from 'framer-motion'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type BlockProps = {
  className?: string
} & MotionProps

export interface ExperienceItem {
  company: string
  year?: number
  department?: string
  position: string
  list: string[]
  color: string
}

export interface ContactsCard {
  title: string
  subtitle: string
  Icon: IconType
  href: string
}
