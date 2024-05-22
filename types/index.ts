import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface ExperienceItem {
  company: string
  year?: number
  department?: string
  position: string
  list: string[]
  color: string
}
