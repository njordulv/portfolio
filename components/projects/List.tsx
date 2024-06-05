'use client'

import { motion } from 'framer-motion'
import { Spinner } from '@nextui-org/spinner'
import useFetcher from '@/hooks/useFetcher'
import { Item } from '@/components/projects/Item'

const listVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

export const List = () => {
  const { data, isError, isLoading } = useFetcher({
    endpoint: `/api/github`,
  })

  if (isError) return <>{'Error fetching data'}</>
  if (isLoading || !data) return <Spinner color="default" />

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={listVariants}
      className="grid gap-6 grid-cols-1 sm:grid-cols-3 sm:px-6"
    >
      {data.map((project: any) => (
        <Item key={project.name} project={project} />
      ))}
    </motion.div>
  )
}
