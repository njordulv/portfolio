'use client'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { fontMono } from '@/config/fonts'

const variants: Variants = {
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

export const Beyond = () => {
  return (
    <section className="beyond" id="beyond">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        className="mx-auto grid grid-flow-dense grid-cols-12 gap-6 sm:px-6"
      >
        <div className="col-span-12 row-span-2 sm:col-start-3 sm:col-end-13 shadow-xl flex flex-col rounded-xl border-2 border-black bg-success text-black p-7">
          <h2
            className={clsx(
              fontMono.variable,
              'text-right text-yellow drop-shadow-md mb-8'
            )}
          >
            Beyond Coding
          </h2>
          <div>
            {/* 
            1. music
            2. guitar, bass, etc
            3. photo & video
            4. cycling
            5. traveling
            6. autotuning
            7. movie & tv
            */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
