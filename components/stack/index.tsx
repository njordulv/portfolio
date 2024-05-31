'use client'

import { motion, Variants } from 'framer-motion'
import { Skills } from '@/components/stack/Skills'

const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
}

export const Stack = () => {
  return (
    <section className="stack" id="skills">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={cardVariants}
        transition={{
          staggerChildren: 0.09,
        }}
        className="mx-auto grid grid-flow-dense grid-cols-12 gap-6 sm:px-6"
      >
        <Skills />
      </motion.div>
    </section>
  )
}
