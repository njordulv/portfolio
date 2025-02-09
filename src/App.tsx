import { lazy, Suspense } from 'react'
import { MetaData } from '@/metadata'
import { Preloader } from '@/components/Preloader'
import { About } from '@/components/about'
import { Navigation } from '@/components/nav/Navigation'

const Stack = lazy(() =>
  import('@/components/stack').then((mod) => ({ default: mod.Stack }))
)
const Experience = lazy(() =>
  import('@/components/experience').then((mod) => ({ default: mod.Experience }))
)
const Projects = lazy(() =>
  import('@/components/projects').then((mod) => ({ default: mod.Projects }))
)
const Beyond = lazy(() =>
  import('@/components/beyond').then((mod) => ({ default: mod.Beyond }))
)
const Contacts = lazy(() =>
  import('@/components/contacts').then((mod) => ({ default: mod.Contacts }))
)
const Footer = lazy(() =>
  import('@/components/Footer').then((mod) => ({ default: mod.Footer }))
)

export const App = () => {
  return (
    <>
      <MetaData />
      <Navigation />
      <Suspense fallback={<Preloader />}>
        <main className="container mx-auto max-w-[1280px] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
          <About />
          <Stack />
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
