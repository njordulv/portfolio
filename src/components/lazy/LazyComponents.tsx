import { lazy } from 'react'
import { About } from '@/components/about'
import { Progress } from '@/components/progress'
import { LazyComponent } from '@/components/lazy/LazyComponent'

const Stack = lazy(() => import('@/components/stack'))
const Experience = lazy(() => import('@/components/experience'))
const Projects = lazy(() => import('@/components/projects'))
const Beyond = lazy(() => import('@/components/beyond'))
const Contacts = lazy(() => import('@/components/contacts'))
const Footer = lazy(() => import('@/components/Footer'))

export const LazyComponents = () => {
  return (
    <>
      <main className="container mx-auto max-w-7xl min-h-[calc(100vh-184px)] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
        <About />
        <Progress />
        <LazyComponent component={Stack} />
        <LazyComponent component={Experience} />
        <LazyComponent component={Projects} />
        <LazyComponent component={Beyond} />
        <LazyComponent component={Contacts} />
      </main>
      <LazyComponent component={Footer} />
    </>
  )
}
