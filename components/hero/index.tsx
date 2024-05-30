'use client'

import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { BlockProps } from '@/types'
import { Intro } from '@/components/hero/Intro'
import { Photo } from '@/components/hero/Photo'
import { Tech } from '@/components/hero/Tech'
import { About } from '@/components/hero/About'

export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 1.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 4,
        stiffness: 500,
        damping: 50,
      }}
      className={twMerge('rounded-xl text-color border-black', className)}
      {...rest}
    />
  )
}

export const Hero = () => {
  return (
    <section className="hero" id="about">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto flex flex-col sm:grid sm:grid-cols-12 gap-7 sm:px-6"
      >
        <Intro />
        <Photo />
        <Tech />
        <About />
      </motion.div>
    </section>
  )
}
