import { SVGProps } from 'react'
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
