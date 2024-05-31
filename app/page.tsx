import { Progress } from '@/components/Progress'
import { About } from '@/components/about'
import { Stack } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Contacts } from '@/components/contacts'

export default function Home() {
  return (
    <>
      <Progress />
      <About />
      <Stack />
      <Experience />
      <Contacts />
    </>
  )
}
