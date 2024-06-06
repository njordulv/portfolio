'use client'

import { motion, Variants } from 'framer-motion'
import { ExperienceCard } from '@/types'

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150,
    rotate: -6,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.9,
    },
  },
}

export function Card({ children, color }: ExperienceCard) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className={`flex flex-col items-start justify-center gap-2 rounded-xl sm:min-h-48 border-2 border-black bg-${color} p-5 sm:p-6 text-black shadow-xl`}
        variants={variants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
