'use client'

import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { fontMono } from '@/config/fonts'

interface Props {
  children: React.ReactNode
  color: string
}

interface ExperienceItem {
  company: string
  position: string
  list: string[]
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

function Card({ children, color }: Props) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className={`flex flex-col items-start justify-center gap-2 rounded-xl min-h-48 border-2 border-black bg-${color} p-6 text-color shadow-xl`}
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export const Experience = () => {
  return (
    <section className="w-full" id="experience">
      <div className="flex flex-col items-stretch mx-auto max-w-5xl sm:px-6">
        <h2 className={clsx(fontMono.variable, 'text-center')}>Experience</h2>
        {siteConfig.experience.map((item: ExperienceItem, index: number) => (
          <div
            className="w-[49%]"
            key={index}
            style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
          >
            <Card color={item.color}>
              <h3 className={clsx(fontMono.variable, 'text-black')}>
                {item.company}
              </h3>
              <p className="text-beige">{item.position}</p>
              <ul className="list-disc pl-4 text-black">
                {item.list.map((li: string, index: number) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
