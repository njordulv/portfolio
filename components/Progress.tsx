'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export const Progress = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1])

  return (
    <div className="progress-bar rounded-b-lg dark:border-transparent border-2 border-t-0 border-black">
      <motion.div
        className="w-full h-full overflow-hidden rounded-b-lg border-2 border-t-0 dark:border-black border-white bg-coal bg-opacity-40"
        style={{
          scale,
        }}
      >
        <motion.div
          className="progress-bar-item w-full h-full bg-success"
          style={{
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </div>
  )
}
