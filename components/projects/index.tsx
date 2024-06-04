'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { fontMono } from '@/config/fonts'
import { List } from './List'

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2
        className={clsx(
          fontMono.variable,
          'text-center text-primary drop-shadow-md mb-8'
        )}
      >
        Projects
      </h2>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="grid gap-5 grid-cols-1 sm:grid-cols-3 sm:px-6"
      >
        <List />
      </motion.div>
    </section>
  )
}
