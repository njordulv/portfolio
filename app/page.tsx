import dynamic from 'next/dynamic'
import { Preloader } from '@/components/Preloader'
import { Progress } from '@/components/Progress'
import { About } from '@/components/about'

const Stack = dynamic(
  () => import('@/components/stack').then((mod) => mod.Stack),
  {
    loading: () => <Preloader />,
  }
)

const Experience = dynamic(
  () => import('@/components/experience').then((mod) => mod.Experience),
  {
    loading: () => <Preloader />,
  }
)

const Projects = dynamic(
  () => import('@/components/projects').then((mod) => mod.Projects),
  {
    loading: () => <Preloader />,
  }
)

const Beyond = dynamic(
  () => import('@/components/beyond').then((mod) => mod.Beyond),
  {
    loading: () => <Preloader />,
  }
)

const Contacts = dynamic(
  () => import('@/components/contacts').then((mod) => mod.Contacts),
  {
    loading: () => <Preloader />,
  }
)

export default function Home() {
  return (
    <>
      <Progress />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Beyond />
      <Contacts />
    </>
  )
}
