'use client'

import clsx from 'clsx'
import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { fontMono } from '@/config/fonts'

export const Stack = () => {
  return (
    <div className="min-h-screen stack w-full" id="skills">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-6"
      >
        <StackBlock />
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
        'col-span-4 rounded-lg border-2 border-black bg-coal p-6',
        className
      )}
      {...rest}
    />
  )
}

const StackBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6 bg-opacity-90 text-color shadow-xl">
    <h1 className={clsx(fontMono.variable)}>Tech Stack</h1>
    <ul className="mt-6 text-zinc-400">
      <li>HTML, CSS, SCSS</li>
      <li>Bootstrap, Tailwindcss</li>
      <li>JavaScript (ES6+), Typescript</li>
      <li>React, Redux, Next.js</li>
      <li>NextUI, ChakraUI, MaterialUI</li>
      <li>Git, Github, Gitlab</li>
      <li>NPM, Yarn, Webpack</li>
      <li>Docker, Kubernetes, NodeJS</li>
      <li>API, Firebase SDK</li>
      <li>Twig, PHP, Symfony</li>
      <li>MySQL, PostgreSQL</li>
      <li>Wordpress</li>
      <li>Figma, Sketch</li>
      <li>Jira, Trello</li>
    </ul>
  </Block>
)
