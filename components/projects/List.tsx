'use client'

import clsx from 'clsx'
import { Link } from '@nextui-org/link'
import { motion } from 'framer-motion'
import { Spinner } from '@nextui-org/spinner'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { fontMono } from '@/config/fonts'
import useFetcher from '@/hooks/useFetcher'

const containerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
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

  if (isError) return <>{'Error fetching data'}</>
  if (isLoading || !data) return <Spinner color="default" />

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="grid gap-5 grid-cols-1 sm:grid-cols-3 sm:px-6"
    >
      {data.map((project: any) => (
        <motion.div
          key={project.name}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={variants}
          className="flex flex-col gap-3 justify-between p-4 bg-coal rounded-lg border-1 border-black shadow-xl"
        >
          <h4 className={clsx(fontMono.variable, 'text-primary capitalize')}>
            {project.name}
          </h4>
          <p className="text-default">{project.description}</p>
          {project.topics.length !== 0 && (
            <ul className="flex flex-wrap gap-1">
              {project.topics.map((topic: string) => (
                <li
                  key={topic}
                  className="bg-beige text-black px-2 leading-6 text-tiny rounded-md"
                >
                  {topic}
                </li>
              ))}
            </ul>
          )}
          <div className="flex gap-3">
            <Link
              isExternal
              href={project.html_url}
              className="text-default hover:text-primary transition-all text-xl cursor-pointer"
            >
              <FaGithub />
            </Link>
            {project.homepage && (
              <Link
                isExternal
                href={project.homepage}
                className="text-default hover:text-primary transition-all text-xl cursor-pointer"
              >
                <FaExternalLinkAlt />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
