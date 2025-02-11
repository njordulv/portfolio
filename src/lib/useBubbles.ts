import { useTransform, MotionValue } from 'framer-motion'

interface BubbleProps {
  scrollProgress: MotionValue<number>
  xPositions: number[]
}

export const useBubbles = ({ scrollProgress, xPositions }: BubbleProps) => {
  return useTransform(scrollProgress, [0, 1], xPositions)
}
