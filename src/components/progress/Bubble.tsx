import { m } from 'framer-motion'
import { BubbleProps } from '@/types/interfaces'

export const Bubble: React.FC<BubbleProps> = ({
  xTransform,
  sizeClass,
  duration,
  bubbleY,
}) => (
  <m.span
    style={{ x: xTransform }}
    animate={{ y: bubbleY }}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration: duration,
    }}
    className={`bubble ${sizeClass}`}
  />
)
