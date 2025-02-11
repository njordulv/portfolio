import { useMemo } from 'react'
import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Bubble } from '@/components/progress/Bubble'
import { siteConfig } from '@/config/site'

const Progress = () => {
  const { scrollYProgress } = useScroll()
  const bubbleY = [0, -150]

  const bubbleTransforms = useMemo(
    () =>
      siteConfig.bubbles.map(({ x }) =>
        /* eslint-disable-next-line react-hooks/rules-of-hooks */
        useTransform(scrollYProgress, [0, 1], x)
      ),
    [scrollYProgress]
  )

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={siteConfig.progressVariants}
        initial="hidden"
        animate="show"
        className="progress-bar rounded-b-xl border-black"
      >
        <m.div className="w-full h-full overflow-hidden rounded-b-xl border-1 border-white/50 border-t-0">
          <m.div
            className="progress-bar-item bg-success"
            style={{ scaleY: scrollYProgress }}
          />

          {siteConfig.bubbles.map(({ size, duration }, index) => (
            <Bubble
              key={index}
              xTransform={bubbleTransforms[index]}
              sizeClass={size}
              duration={duration}
              bubbleY={bubbleY}
            />
          ))}
        </m.div>
      </m.div>
    </LazyMotion>
  )
}

export default Progress
