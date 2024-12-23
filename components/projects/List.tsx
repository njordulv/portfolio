'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Spinner } from '@nextui-org/spinner'
import useFetcher from '@/hooks/useFetcher'
import { Item } from '@/components/projects/Item'
import { ProjectProps } from '@/types/interfaces'

const listVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  offscreen: {
    opacity: 0,
    rotate: -6,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    rotate: 0,
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

  if (isError) return <>{'Error fetching data'}</>
  if (isLoading || !data) return <Spinner color="default" />

  const sortedByDate = [...data].sort((a: ProjectProps, b: ProjectProps) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const showOnly = sortedByDate.slice(0, 9)

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={listVariants}
        className="grid gap-6 grid-cols-1 sm:grid-cols-3 sm:px-6"
      >
        {showOnly.map((project: ProjectProps) => (
          <m.div
            key={project.name}
            variants={itemVariants}
            className="flex flex-col gap-4 justify-between p-5 bg-coal rounded-lg border-2 border-black shadow-xl"
          >
            <Item project={project} />
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  )
}
