import { Progress } from '@/components/Progress'
import { Hero } from '@/components/hero'
import { Stack } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Contacts } from '@/components/contacts'

export default function Home() {
  return (
    <>
      <Progress />
      <Hero />
      <Stack />
      <Experience />
      <Contacts />
    </>
  )
}
