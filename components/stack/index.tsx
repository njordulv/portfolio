'use client'

import { motion } from 'framer-motion'
import { Skills } from '@/components/stack/Skills'

export const Stack = () => {
  return (
    <section className="stack" id="skills">
      <motion.div
        initial="initial"
        animate="animate"
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
