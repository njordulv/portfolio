'use client'

import clsx from 'clsx'
import { MotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { Button } from '@nextui-org/button'
import { fontMono } from '@/config/fonts'
import { TbApi } from 'react-icons/tb'
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNextui,
  SiChakraui,
  SiMui,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNpm,
  SiYarn,
  SiBabel,
  SiWebpack,
  SiDocker,
  SiKubernetes,
  SiNodedotjs,
  SiFirebase,
  SiPhp,
  SiSymfony,
  SiMysql,
  SiPostgresql,
  SiWordpress,
  SiFigma,
  SiSketch,
  SiJira,
  SiTrello,
} from 'react-icons/si'

export const Stack = () => {
  return (
    <section className="stack min-h-screen w-full" id="skills">
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
    <ul className="flex flex-col gap-2 mt-6 text-zinc-400">
      <li className="flex gap-2">
        <Button
          isIconOnly
          color="danger"
          radius="full"
          variant="flat"
          aria-label="HTML"
          className="shadow-md text-xl"
        >
          <SiHtml5 />
        </Button>
        <Button
          isIconOnly
          color="primary"
          radius="full"
          variant="flat"
          aria-label="HTML"
          className="shadow-md text-xl"
        >
          <SiCss3 />
        </Button>
      </li>
      <li className="flex gap-2">
        <SiBootstrap />
        <SiTailwindcss />
      </li>
      <li className="flex gap-2">
        <SiJavascript />
        <SiTypescript />
      </li>
      <li className="flex gap-2">
        <SiReact />
        <SiRedux />
        <SiNextdotjs />
      </li>
      <li className="flex gap-2">
        <SiNextui />
        <SiChakraui />
        <SiMui />
      </li>
      <li className="flex gap-2">
        <SiGit />
        <SiGithub />
        <SiGitlab />
      </li>
      <li className="flex gap-2">
        <SiNpm />
        <SiYarn />
        <SiBabel />
        <SiWebpack />
      </li>
      <li className="flex gap-2">
        <SiDocker />
        <SiKubernetes />
        <SiNodedotjs />
      </li>
      <li className="flex gap-2">
        <TbApi />
        <SiFirebase />
      </li>
      <li className="flex gap-2">
        <SiPhp />
        <SiSymfony />
      </li>
      <li className="flex gap-2">
        <SiMysql />
        <SiPostgresql />
      </li>
      <li className="flex gap-2">
        <SiWordpress />
      </li>
      <li className="flex gap-2">
        <SiFigma />
        <SiSketch />
      </li>
      <li className="flex gap-2">
        <SiJira />
        <SiTrello />
      </li>
    </ul>
  </Block>
)
