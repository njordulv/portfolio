import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { fontMono } from '@/config/fonts'
import clsx from 'clsx'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={clsx(fontMono.variable)}>Home</h1>
      </div>
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
