import { useBubbles } from '@/lib/useBubbles'
import { Bubble } from '@/components/progress/Bubble'
import { BubblesProps } from '@/types/interfaces'

export const Bubbles: React.FC<BubblesProps> = ({
  scrollProgress,
  xPositions,
  size,
  duration,
  bubbleY,
}) => {
  const transform = useBubbles({ scrollProgress, xPositions })

  return (
    <Bubble
      xTransform={transform}
      sizeClass={size}
      duration={duration}
      bubbleY={bubbleY}
    />
  )
}
