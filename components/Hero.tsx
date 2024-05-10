'use client'

import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Code } from '@nextui-org/code'
import { SiReact, SiNextui, SiTailwindcss, SiFramer } from 'react-icons/si'
import clsx from 'clsx'
import { fontMono } from '@/config/fonts'

export const Hero = () => {
  return (
    <div className="min-h-screen hero" id="hero">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-6"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
      </motion.div>
    </div>
  )
}

type BlockProps = {
  className?: string
} & MotionProps

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
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
        mass: 3,
        stiffness: 300,
        damping: 50,
      }}
      className={twMerge(
        'col-span-4 rounded-lg border border-charcoal bg-coal bg-opacity-85 p-6',
        className
      )}
      {...rest}
    />
  )
}

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <h1 className={clsx(fontMono.variable)}>Hi, I{"'"}m Dmitriy.</h1>
    <h2 className={clsx(fontMono.variable, 'text-zinc-400')}>
      I{"'"}m a{' '}
      <span className="before:block before:absolute before:-inset-1 before:h-[1.5px] before:top-[56%] before:bg-zinc-400 relative inline-block before:z-10 rotate-1 rotate:1 before:-rotate-3">
        <span className="relative text-zinc-600">alcoholic</span>
      </span>{' '}
      frontend developer
    </h2>
  </Block>
)

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl leading-snug">
    <p>
      I build cool websites like this one.{' '}
      <span className="text-zinc-400">
        I primarily use{' '}
        <Code color="primary" size="md">
          Next JS
        </Code>
        ,{' '}
        <Code color="secondary" size="md">
          Next UI
        </Code>
        ,{' '}
        <Code color="success" size="md">
          Tailwind CSS
        </Code>
        , and{' '}
        <Code color="warning" size="md">
          Framer Motion
        </Code>
        . I like this stack so much so I even built this portfolio based on it.
        But this is not my limit, I go on broadening my horizons by learning new
        technologies.
      </span>
    </p>
  </Block>
)

const SocialsBlock = () => (
  <>
    <Block
      initial={{
        rotate: '-1deg',
        scale: 1.1,
        opacity: 0,
      }}
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-blue md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiReact />
      </a>
    </Block>
    <Block
      initial={{
        rotate: '2deg',
        scale: 1.1,
        opacity: 0,
      }}
      whileHover={{
        rotate: '-2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-secondary md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-default"
      >
        <SiNextui />
      </a>
    </Block>
    <Block
      initial={{
        rotate: '-2.5deg',
        scale: 1.1,
        opacity: 0,
      }}
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-success md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-default"
      >
        <SiTailwindcss />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: '2.5deg',
        scale: 1.1,
      }}
      className="col-span-6 bg-pink md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-default"
      >
        <SiFramer />
      </a>
    </Block>
  </>
)
