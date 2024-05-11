import { Hero } from '@/components/Hero'
import { Stack } from '@/components/Stack'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <Stack />
    </section>
  )
}
