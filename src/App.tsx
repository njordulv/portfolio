import { lazy, Suspense } from 'react'
import { MetaData } from '@/metadata'
import { Preloader } from '@/components/Preloader'
import { Navigation } from '@/components/nav/Navigation'
import { Footer } from '@/components/Footer'

const About = lazy(() => import('@/components/about'))
const Stack = lazy(() => import('@/components/stack'))
const Progress = lazy(() => import('@/components/progress'))
const Experience = lazy(() => import('@/components/experience'))
const Projects = lazy(() => import('@/components/projects'))
const Beyond = lazy(() => import('@/components/beyond'))
const Contacts = lazy(() => import('@/components/contacts'))

export const App = () => {
  return (
    <>
      <MetaData />
      <Navigation />
      <Suspense fallback={<Preloader />}>
        <main className="container mx-auto max-w-7xl min-h-[calc(100vh-184px)] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
          <About />
          <Stack />
          <Progress />
          <Experience />
          <Projects />
          <Beyond />
          <Contacts />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}
