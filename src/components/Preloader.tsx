import { m, LazyMotion, domAnimation, Variants } from 'framer-motion'

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circOut',
    },
  },
} as Variants

export const Preloader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        transition={{
          staggerChildren: 0.07,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1 mx-auto items-center justify-center h-dvh"
      >
        {[...Array(5)].map((_, index) => (
          <m.span
            key={index}
            variants={variants}
            className="h-10 w-2 rounded-xs bg-default"
          />
        ))}
      </m.div>
    </LazyMotion>
  )
}
