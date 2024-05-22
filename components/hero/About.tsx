'use client'

import { Code } from '@nextui-org/code'
import { Block } from '@/components/hero/Section'

export const About = () => (
  <Block className="col-span-12 md:col-span-7 text-3xl row-span-2 leading-snug bg-opacity-90">
    <p>I build cool websites like this one.</p>
    <p className="text-zinc-400">
      I primarily use&nbsp;
      <Code color="primary" size="md" className="relative bottom-[2px]">
        Next JS
      </Code>
      ,&nbsp;
      <Code color="secondary" size="md" className="relative bottom-[2px]">
        Next UI
      </Code>
      ,&nbsp;
      <Code color="success" size="md" className="relative bottom-[2px]">
        Tailwind CSS
      </Code>
      , and&nbsp;
      <Code color="warning" size="md" className="relative bottom-[2px]">
        Framer Motion
      </Code>
      . I like this stack so much so I even built this portfolio based on it.
      But this is not my limit, I go on broadening my horizons by learning new
      technologies.
    </p>
  </Block>
)
