import { SVGProps } from 'react'
import { IconType } from 'react-icons'
import { MotionProps } from 'framer-motion'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type BlockProps = {
  className?: string
} & MotionProps

export interface ButtonProps {
  text: string
  onClick?: () => void
  download?: string
}

export interface ExperienceItem {
  company: string
  year?: number
  department?: string
  position: string
  list: string[]
  color: string
}

export interface ExperienceCard {
  children: React.ReactNode
  color: string
}

export interface HobbiesCard {
  name: string
  description: string
  Icon: IconType
}
