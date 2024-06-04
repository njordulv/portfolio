'use client'

import { motion } from 'framer-motion'
import useFetcher from '@/hooks/useFetcher'

const variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
    y: 4,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const List = () => {
  const { data, isError, isLoading } = useFetcher({
    endpoint: `/api/github`,
  })

  if (isError) return <>{'Error'}</>
  if (isLoading || !data) return <>{'Loading'}</>

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="flex gap-3"
    >
      {data.map((el: any) => (
        <div key={el.name}>
          <h4>{el.name}</h4>
          <p>{el.description}</p>
        </div>
      ))}
    </motion.div>
  )
}
