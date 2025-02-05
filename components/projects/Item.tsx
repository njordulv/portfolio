import clsx from 'clsx'
import { Link } from "@heroui/link"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { fontMono } from '@/config/fonts'
import { ProjectItems } from '@/types/interfaces'

export const Item: React.FC<ProjectItems> = ({ project }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
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
                className="dark:bg-zinc-400 bg-zinc-200 text-black px-[6px] py-1 text-tiny rounded-md"
              >
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
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
    </>
  )
}
