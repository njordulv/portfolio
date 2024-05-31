import { Progress } from '@/components/Progress'
import { About } from '@/components/about'
import { Stack } from '@/components/stack'
import { Experience } from '@/components/experience'
import { Beyond } from '@/components/beyond'
import { Contacts } from '@/components/contacts'

export default function Home() {
  return (
    <>
      <Progress />
      <About />
      <Stack />
      <Experience />
      <Beyond />
      <Contacts />
    </>
  )
}
