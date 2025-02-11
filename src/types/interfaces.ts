import { IconType } from 'react-icons'
import { MotionValue } from 'framer-motion'

export interface ButtonProps {
  text: string
  onClick?: () => void
  download?: string
  ariaLabel?: string
}

export interface ExperienceItem {
  company: string
  year?: string
  department?: string
  position: string
  list: string[]
  color: string
}

export interface ExperienceCard {
  children: React.ReactNode
  color: string
}

export interface ProjectProps {
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage?: string
  created_at: string
}

export interface ProjectItems {
  project: ProjectProps
}

export interface Hobby {
  id: string
  name: string
  description: string
  icon: IconType
}

export interface ContactsCard {
  title: string
  subtitle: string
  Icon: IconType
  href: string
}

export interface NavProps {
  href: string
  label: string
  children: React.ReactNode
}

export interface TechStackProps {
  name: string
  rotate: string
  color: string
  link: string
  Icon: IconType
}

export interface BubblesProps {
  scrollProgress: MotionValue<number>
  xPositions: number[]
  size: string
  duration: number
  bubbleY: number[]
}

export interface BubbleProps {
  xTransform: MotionValue<number>
  sizeClass: string
  duration: number
  bubbleY: number[]
}
