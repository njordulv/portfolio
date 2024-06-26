'use client'

import {
  m,
  LazyMotion,
  domAnimation,
  useScroll,
  useTransform,
} from 'framer-motion'

const container = {
  hidden: { opacity: 0, left: -13 },
  show: {
    opacity: 1,
    left: 2,
    transition: {
      type: 'ease',
      delayChildren: 0.5,
    },
  },
}

export const Progress = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1])
  const bubble1X = useTransform(scrollYProgress, [0, 1], [5, 6])
  const bubble2X = useTransform(scrollYProgress, [0, 1], [8, 7])
  const bubble3X = useTransform(scrollYProgress, [0, 1], [2, 2])
  const bubble4X = useTransform(scrollYProgress, [0, 1], [5, 9])
  const bubble5X = useTransform(scrollYProgress, [0, 1], [3, 0])
  const bubbleY = [0, -150]

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="progress-bar rounded-b-xl border-black"
      >
        <m.div
          style={{
            scale,
          }}
          className="w-full h-full overflow-hidden rounded-b-xl border-1 border-white border-opacity-50 border-t-0"
        >
          <m.div
            className="progress-bar-item bg-success"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <m.span
            style={{ x: bubble1X }}
            animate={{ y: bubbleY }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 10 }}
            className="bubble w-[8px] h-[8px]"
          />
          <m.span
            style={{ x: bubble2X }}
            animate={{ y: bubbleY }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 8 }}
            className="bubble w-[6px] h-[6px]"
          />
          <m.span
            style={{ x: bubble3X }}
            animate={{ y: bubbleY }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 6 }}
            className="bubble w-[5px] h-[5px]"
          />
          <m.span
            style={{ x: bubble4X }}
            animate={{ y: bubbleY }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 4 }}
            className="bubble w-[4px] h-[4px]"
          />
          <m.span
            style={{ x: bubble5X }}
            animate={{ y: bubbleY }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 3 }}
            className="bubble w-[3px] h-[3px]"
          />
        </m.div>
      </m.div>
    </LazyMotion>
  )
}
