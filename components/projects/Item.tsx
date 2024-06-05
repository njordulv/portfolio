import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Link } from '@nextui-org/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { fontMono } from '@/config/fonts'
import { Project } from '@/types'

const itemVariants = {
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

interface ItemProps {
  project: Project
}

export const Item: React.FC<ItemProps> = ({ project }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={itemVariants}
      className="flex flex-col gap-3 justify-between p-4 bg-coal rounded-lg border-2 border-black shadow-xl"
    >
      <div
        className={clsx(
          fontMono.variable,
          'title text-secondary-600 capitalize text-xl leading-6'
        )}
      >
        {project.name}
      </div>
      <p className="text-zinc-400">{project.description}</p>
      {project.topics.length !== 0 && (
        <ul className="flex flex-wrap gap-1">
          {project.topics.map((topic: string) => (
            <li
              key={topic}
              className="dark:bg-zinc-400 bg-zinc-200 text-black px-2 leading-6 text-tiny rounded-md"
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
  )
}
