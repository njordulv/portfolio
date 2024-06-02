'use client'

import { motion } from 'framer-motion'
import { BlockProps } from '@/types'

export const List = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.li
      variants={{
        initial: {
          scale: 0.5,
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
        mass: 3,
        stiffness: 300,
        damping: 50,
      }}
      {...rest}
    />
  )
}
