import { m, LazyMotion, domAnimation } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { BlockProps } from '@/types/types'
import { Intro } from '@/components/about/Intro'
import { Photo } from '@/components/about/Photo'
import { TechList } from '@/components/about/TechList'
import { Text } from '@/components/about/Text'

export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <m.div
      variants={{
        initial: {
          scale: 1.5,
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
        mass: 4,
        stiffness: 500,
        damping: 50,
      }}
      className={twMerge('rounded-xl text-color border-black', className)}
      {...rest}
    />
  )
}

export const About = () => {
  return (
    <section className="hero" id="about">
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto flex flex-col sm:grid sm:grid-cols-12 gap-7 sm:px-6"
        >
          <Intro />
          <Photo />
          <TechList />
          <Text />
        </m.div>
      </LazyMotion>
    </section>
  )
}
