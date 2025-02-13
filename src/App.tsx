import { Metadata } from '@/Metadata'
import { Navigation } from '@/components/nav/Navigation'
import { LazyComponents } from '@/components/lazy/LazyComponents'

export const App = () => {
  return (
    <>
      <Metadata />
      <Navigation />
      <LazyComponents />
    </>
  )
}
