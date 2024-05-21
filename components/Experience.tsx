'use client'

import { motion, Variants } from 'framer-motion'
import styles from '@/styles/experience.module.css'

interface Props {
  text: string
  hueA: number
  hueB: number
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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`

function Card({ text, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className={styles.card}
        variants={cardVariants}
        style={{ background }}
      >
        {text}
      </motion.div>
    </motion.div>
  )
}

const food: [string, number, number][] = [
  ['2013', 340, 10],
  ['2014', 20, 40],
  ['2015', 60, 90],
  ['2016', 80, 120],
  ['2017', 100, 140],
  ['2019', 205, 245],
  ['2021', 260, 290],
  ['2023', 290, 320],
]

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <div className={`${styles.wrapper} mx-auto max-w-5xl sm:px-6`}>
        {food.map(([text, hueA, hueB], index) => (
          <div
            className={`${styles.container}`}
            key={text}
            style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
          >
            <Card text={text} hueA={hueA} hueB={hueB} />
          </div>
        ))}
      </div>
    </section>
  )
}
