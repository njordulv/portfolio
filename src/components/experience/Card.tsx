import { m, LazyMotion, domAnimation, Variants } from 'framer-motion'
import { ExperienceCard } from '@/types/interfaces'

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150,
    rotate: -6,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.9,
    },
  },
}

export function Card({ children, color }: ExperienceCard) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        className={`flex flex-col items-start justify-center gap-2 rounded-xl md:min-h-48 border-2 border-black bg-${color} p-5 md:p-6 text-black shadow-xl`}
        variants={variants}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
