'use client'

import clsx from 'clsx'
import { MotionProps, motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
import { twMerge } from 'tailwind-merge'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'

type BlockProps = {
  className?: string
} & MotionProps

export const Stack = () => {
  return (
    <section className="stack min-h-screen w-full" id="skills">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.1,
        }}
        className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-6"
      >
        <StackBlock />
      </motion.div>
    </section>
  )
}

const ListItem = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.li
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
      className={twMerge('', className)}
      {...rest}
    />
  )
}

const StackBlock = () => (
  <div className="col-span-12 row-span-2 md:col-span-7 shadow-xl flex flex-col gap-5 rounded-lg border-2 border-black bg-beige text-black p-6">
    <h2 className={clsx(fontMono.variable, 'text-red')}>Tech Stack</h2>
    {Object.entries(siteConfig.techStackCategiries).map(
      ([categoryName, categoryItems]) => (
        <div key={categoryName}>
          <h3 className={'text-black text-xl mb-3 font-medium'}>
            {categoryName}
          </h3>
          <ul className="flex gap-2 flex-wrap">
            {siteConfig.techStackIcons
              .filter((item) => categoryItems.includes(item.label))
              .map((item, index) => (
                <ListItem
                  key={index}
                  className="flex gap-2 border-default"
                  whileHover={{
                    rotate: '-6deg',
                    scale: 1.3,
                  }}
                >
                  <Tooltip
                    placement="bottom"
                    offset={9}
                    content={item.label}
                    classNames={{
                      content: 'border-1 text-beige bg-black',
                    }}
                  >
                    <span className="shadow-lg shadow-black bg-black w-10 h-10 text-beige border-1 border-beige rounded-full flex justify-center items-center hover:bg-red hover:border-contrast transition-all cursor-pointer">
                      <item.icon size="20" />
                    </span>
                  </Tooltip>
                </ListItem>
              ))}
          </ul>
        </div>
      )
    )}
  </div>
)
