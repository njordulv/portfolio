'use client'

import clsx from 'clsx'
import { MotionProps, motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import { twMerge } from 'tailwind-merge'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'

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
      {siteConfig.techStackIcons.map((item, index) => (
        <Tooltip key={index} color="default" content={item.label}>
          <li key={index} className="flex gap-2">
            <item.icon size="24" />
          </li>
        </Tooltip>
      ))}
    </ul>
  </Block>
)
