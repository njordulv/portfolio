import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Intro } from '@/components/about/Intro'
import { Photo } from '@/components/about/Photo'
import { TechList } from '@/components/about/TechList'
import { Text } from '@/components/about/Text'

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
          className="mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 lg:px-6"
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
