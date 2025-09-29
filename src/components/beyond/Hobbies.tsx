import { m, LazyMotion, domAnimation, Variants } from 'framer-motion'
import { useState } from 'react'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { ShuffleGrid } from '@/components/beyond/ShuffleGrid'

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
    scaleY: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      type: 'spring',
    },
  },
}

export const Hobbies = () => {
  const [name, setName] = useState(siteConfig.hobbies[0].name)
  const [text, setText] = useState(siteConfig.hobbies[0].description)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-end gap-6 mx-auto">
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="animate"
          className="flex flex-col justify-end order-last md:order-first min-h-24"
        >
          <m.h3
            key={name}
            variants={variants}
            className={`${fontMono.className} text-xl text-yellow drop-shadow-md mb-4`}
          >
            {name}
          </m.h3>
          <m.p key={text} variants={variants} className="text-base md:text-lg">
            {text}
          </m.p>
        </m.div>
      </LazyMotion>
      <ShuffleGrid setText={setText} setName={setName} />
    </div>
  )
}
