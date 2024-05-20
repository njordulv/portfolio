'use client'

import clsx from 'clsx'
import NextLink from 'next/link'
import { Image } from '@nextui-org/image'
import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Code } from '@nextui-org/code'
import { SiNextdotjs, SiNextui, SiTailwindcss, SiFramer } from 'react-icons/si'
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
        <IntroBlock />
        <PhotoBlock />
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
        'rounded-lg border-2 border-black bg-coal p-6 text-color shadow-xl',
        className
      )}
      {...rest}
    />
  )
}

const IntroBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-7 flex flex-col justify-between bg-opacity-90 text-3xl text-zinc-400">
    <div className={clsx(fontMono.variable)}>
      <h1 className="text-default mb-2">{`Hi, I'm Dmitriy.`}</h1>
      <p>
        {`I'm a`}&nbsp;
        <span className="before:block before:absolute before:-inset-0 before:h-[2px] before:top-[58%] before:bg-zinc-500 relative inline-block before:z-10 rotate-1 rotate:1 before:-rotate-1">
          <span className="relative text-zinc-500">alcoholic</span>&nbsp;
        </span>
      </p>
      <p>frontend developer.</p>
    </div>
    <div>
      <NextLink
        href="#contact"
        className="text-xl inline-flex dark:text-yellow text-primary dark:hover:text-red hover:text-black transition-all"
      >
        Contact me
      </NextLink>
    </div>
  </Block>
)

const PhotoBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-5 bg-danger flex place-content-center relative overflow-hidden">
    <Image src="/photo.png" width={'300'} alt="Dmitriy Photo" />
    <div className="absolute w-full h-full max-w-56 max-h-56 left-auto bottom-20 bg-beige rounded-full shadow-xl"></div>
  </Block>
)

const TechBlock = () => (
  <div className="col-span-12 row-span-2 md:col-span-5 grid grid-cols-2 gap-4">
    <Block
      initial={{
        rotate: '2.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className="bg-blue p-0 min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiNextdotjs className="drop-shadow-md" />
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
        zIndex: 1,
      }}
      className="bg-secondary p-0 min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiNextui className="drop-shadow-md" />
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
        zIndex: 1,
      }}
      className="bg-success p-0 min-h-24"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiTailwindcss className="drop-shadow-md" />
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
        zIndex: 1,
      }}
      className="bg-pink p-0 min-h-24"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiFramer className="drop-shadow-md" />
      </a>
    </Block>
  </div>
)

const AboutBlock = () => (
  <Block className="col-span-7 text-3xl row-span-2 leading-snug bg-opacity-90">
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
