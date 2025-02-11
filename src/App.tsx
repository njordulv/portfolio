import { MetaData } from '@/metadata'
import { Navigation } from '@/components/nav/Navigation'
import { LazyComponents } from '@/components/LazyComponents'

export const App = () => {
  return (
    <>
      <MetaData />
      <Navigation />
      <LazyComponents />
    </>
  )
}
