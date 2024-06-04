import clsx from 'clsx'
import { fontMono } from '@/config/fonts'
import { List } from '@/components/projects/List'

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2
        className={clsx(
          fontMono.variable,
          'text-center text-primary drop-shadow-md mb-8'
        )}
      >
        Projects
      </h2>
      <div className="flex items-center justify-center min-h-56">
        <List />
      </div>
    </section>
  )
}
