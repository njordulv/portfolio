import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Hero />
      <div className="mt-8">
        <Snippet
          hideSymbol
          hideCopyButton
          variant="flat"
          className="bg-charcoal bg-opacity-50"
        >
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  )
}
