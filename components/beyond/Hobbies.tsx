'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { ShuffleGrid } from './ShuffleGrid'

const variants = {
  initial: {
    opacity: 0,
    y: 18,
    scaleY: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      type: 'spring',
    },
  },
}

export const Hobbies = () => {
  const [name, setName] = useState(siteConfig.hobbies[0].name)
  const [text, setText] = useState(siteConfig.hobbies[0].description)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-end gap-6 mx-auto">
      <motion.div initial="initial" animate="animate">
        <motion.h3
          key={name}
          variants={variants}
          className={clsx(fontMono.variable, 'text-yellow drop-shadow-md mb-4')}
        >
          {name}
        </motion.h3>
        <motion.p
          key={text}
          variants={variants}
          className="text-base md:text-lg"
        >
          {text}
        </motion.p>
      </motion.div>
      <ShuffleGrid setText={setText} setName={setName} />
    </div>
  )
}
