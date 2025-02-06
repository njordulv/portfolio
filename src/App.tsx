import { lazy, Suspense } from 'react'
import { MetaData } from '@/metadata'
import { Preloader } from '@/components/Preloader'
import { Progress } from '@/components/Progress'
import { About } from '@/components/about'
import { Navigation } from '@/components/nav/Navigation'
import { Footer } from '@/components/Footer'

const Stack = lazy(() =>
  import('@/components/stack').then((mod) => ({ default: mod.Stack }))
)
const Experience = lazy(() =>
  import('@/components/experience').then((mod) => ({ default: mod.Experience }))
)
const Beyond = lazy(() =>
  import('@/components/beyond').then((mod) => ({ default: mod.Beyond }))
)
const Contacts = lazy(() =>
  import('@/components/contacts').then((mod) => ({ default: mod.Contacts }))
)

function App() {
  return (
    <>
      <MetaData />
      <div className="flex flex-col p-6">
        <Navigation />
        <main className="container mx-auto max-w-[1280px] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
          <Progress />
          <Suspense fallback={<Preloader />}>
            <About />
            <Stack />
            <Experience />
            <Beyond />
            <Contacts />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
