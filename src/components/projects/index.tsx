import { fontMono } from '@/config/fonts'
import { List } from '@/components/projects/List'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2
        className={`${fontMono.className} text-center text-primary drop-shadow-md mb-4`}
      >
        Projects
      </h2>
      <div className="text-center text-lg text-default mb-8">
        <p>Below are listed my latest works.</p>
      </div>
      <div className="flex items-center justify-center min-h-60">
        <List />
      </div>
    </section>
  )
}

export default Projects
