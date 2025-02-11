import { m, LazyMotion, domAnimation, useScroll } from 'framer-motion'
import { Bubbles } from '@/components/progress/Bubbles'
import { siteConfig } from '@/config/site'

const Progress = () => {
  const { scrollYProgress } = useScroll()
  const bubbleY = [0, -150]

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
          {siteConfig.bubbles.map(({ x, size, duration }, index) => (
            <Bubbles
              key={index}
              scrollProgress={scrollYProgress}
              xPositions={x}
              size={size}
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
