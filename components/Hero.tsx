'use client'

import clsx from 'clsx'
import NextLink from 'next/link'
import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Code } from '@nextui-org/code'
import { SiReact, SiNextui, SiTailwindcss, SiFramer } from 'react-icons/si'
import { fontMono } from '@/config/fonts'

export const Hero = () => {
  return (
    <section className="hero min-h-screen" id="hero">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-6"
      >
        <HeaderBlock />
        <TechBlock />
        <AboutBlock />
      </motion.div>
    </section>
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
      className={twMerge(
        'col-span-4 rounded-lg border-2 border-black bg-coal p-6',
        className
      )}
      {...rest}
    />
  )
}

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 bg-opacity-90 text-color shadow-xl">
    <h1 className={clsx(fontMono.variable)}>{`Hi, I'm Dmitriy.`}</h1>
    <h2 className={clsx(fontMono.variable, 'text-zinc-400')}>
      {`I'm a`}&nbsp;
      <span className="before:block before:absolute before:-inset-0 before:h-[2px] before:top-[58%] before:bg-zinc-500 relative inline-block before:z-10 rotate-1 rotate:1 before:-rotate-1">
        <span className="relative text-zinc-500">alcoholic</span>&nbsp;
      </span>
      frontend developer
    </h2>
    <div className="mt-8">
      <NextLink
        href="#contact"
        className="inline-flex text-yellow hover:text-danger transition-all"
      >
        Contact me
      </NextLink>
    </div>
  </Block>
)

const AboutBlock = () => (
  <Block className="col-span-12 md:col-span-7 md:col-start-6 text-2xl leading-snug text-color shadow-xl">
    <p>
      I build cool websites like this one.&nbsp;
      <span className="text-zinc-400">
        I primarily use&nbsp;
        <Code color="primary" size="md">
          Next JS
        </Code>
        ,&nbsp;
        <Code color="secondary" size="md">
          Next UI
        </Code>
        ,&nbsp;
        <Code color="success" size="md">
          Tailwind CSS
        </Code>
        , and&nbsp;
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

const TechBlock = () => (
  <>
    <Block
      initial={{
        rotate: '2.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
      }}
      className="col-span-6 bg-blue md:col-span-3 p-0 shadow-xl min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-3xl text-beige"
      >
        <SiReact className="drop-shadow-sm" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '3deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
      }}
      className="col-span-6 bg-secondary md:col-span-3 p-0 shadow-xl min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-3xl text-beige"
      >
        <SiNextui className="drop-shadow-sm" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '-2.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
      }}
      className="col-span-6 bg-success md:col-span-3 p-0 shadow-xl min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-3xl text-beige"
      >
        <SiTailwindcss className="drop-shadow-sm" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '-3deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
      }}
      className="col-span-6 bg-pink md:col-span-3 p-0 shadow-xl min-h-24"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-beige"
      >
        <SiFramer className="drop-shadow-sm" />
      </a>
    </Block>
  </>
)
