import { m, LazyMotion, domAnimation, Variants } from 'framer-motion'

const arrowVariants: Variants = {
  offscreen: {
    scale: 0.2,
    opacity: 0,
    x: 180,
    y: 80,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
  },
}

export const Arrow = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.7 }}
        variants={arrowVariants}
        transition={{
          type: 'spring',
          mass: 4,
          stiffness: 500,
          damping: 50,
        }}
        className="text-8xl absolute dark:text-zinc-700 text-charcoal arr-icon md:flex hidden"
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
