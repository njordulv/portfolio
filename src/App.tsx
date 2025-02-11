import { lazy, Suspense } from 'react'
import { MetaData } from '@/metadata'
import { Preloader } from '@/components/Preloader'
import { About } from '@/components/about'
import { Navigation } from '@/components/nav/Navigation'
import { Footer } from '@/components/Footer'

const Stack = lazy(() => import('@/components/stack'))
const Experience = lazy(() => import('@/components/experience'))
const Projects = lazy(() => import('@/components/projects'))
const Beyond = lazy(() => import('@/components/beyond'))
const Contacts = lazy(() => import('@/components/contacts'))
const Progress = lazy(() => import('@/components/progress'))

export const App = () => {
  return (
    <>
      <MetaData />
      <Navigation />
      <Suspense fallback={<Preloader />}>
        <main className="container mx-auto max-w-[1280px] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
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
