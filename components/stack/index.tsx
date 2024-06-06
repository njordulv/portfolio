'use client'

import { motion, Variants } from 'framer-motion'
import { Skills } from '@/components/stack/Skills'

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
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
        variants={variants}
        viewport={{ once: true }}
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
