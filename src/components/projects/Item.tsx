import { Link } from '@heroui/react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { fontMono } from '@/config/fonts'
import { ProjectItems } from '@/types/interfaces'

export const Item: React.FC<ProjectItems> = ({ project }) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h3
          className={`${fontMono.className} title text-secondary capitalize text-xl leading-6`}
        >
          {project.name}
        </h3>
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
          aria-label="GitHub Repository"
          className="text-default hover:text-primary transition-all text-xl cursor-pointer"
        >
          <FaGithub />
        </Link>
        {project.homepage && (
          <Link
            isExternal
            href={project.homepage}
            aria-label="GitHub Homepage"
            className="text-default hover:text-primary transition-all text-xl cursor-pointer"
          >
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </>
  )
}
