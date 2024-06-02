'use client'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { fontMono } from '@/config/fonts'
import { Item } from '@/components/beyond/Item'

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
        viewport={{ once: true }}
        className="mx-auto grid grid-flow-dense grid-cols-12 gap-6 sm:px-6"
      >
        <div className="col-span-12 row-span-2 sm:col-start-3 sm:col-end-13 shadow-xl flex flex-col rounded-xl border-2 border-black bg-success text-black p-7">
          <h2
            className={clsx(
              fontMono.variable,
              'text-right text-yellow drop-shadow-md mb-4'
            )}
          >
            Beyond Coding
          </h2>
          <div className="text-right text-lg mb-8">
            <p>{`Outside of work I'm probably in the middle of this activities`}</p>
          </div>
          <p></p>
          <div>
            {siteConfig.hobbies.map((item) => (
              <Item
                key={item.name}
                name={item.name}
                description={item.description}
                Icon={item.icon}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
