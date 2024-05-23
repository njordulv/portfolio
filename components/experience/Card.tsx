'use client'

import { motion, Variants } from 'framer-motion'

interface Props {
  children: React.ReactNode
  color: string
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    rotate: -10,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export function Card({ children, color }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className={`flex flex-col items-start justify-center gap-2 rounded-xl sm:min-h-48 border-2 border-black bg-${color} p-5 sm:p-6 text-black shadow-xl`}
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
