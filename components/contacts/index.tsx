'use client'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Card } from '@/components/contacts/Card'

const variants: Variants = {
  offscreen: {
    scale: 0.5,
  },
  onscreen: {
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={variants}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.09,
        }}
      >
        <h2
          className={clsx(
            fontMono.variable,
            'text-center text-pink drop-shadow-md mb-4'
          )}
        >
          Contacts
        </h2>
        <div className="text-center mb-8">
          <p>Shoot me an email if you want to connect.</p>
          <p>{`You can also reach my Telegram if that's more your speed!`}</p>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
          {siteConfig.contacts.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              href={card.link}
              Icon={card.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
