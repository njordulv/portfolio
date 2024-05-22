'use client'

import clsx from 'clsx'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Block } from '@/components/hero/Section'
import Button from '@/components/Button'

export const Intro = () => (
  <Block className="col-span-12 row-span-2 md:col-span-8 flex flex-col justify-between bg-none bg-opacity-0 shadow-none border-0 p-0 text-3xl text-zinc-400">
    <div className={clsx(fontMono.variable)}>
      <h1 className="text-default mb-4">{`Hi, I'm Dmitriy.`}</h1>
      <p>
        {`I'm a`}&nbsp;
        <span className="before:block before:absolute before:-inset-0 before:h-[2px] before:top-[58%] before:bg-zinc-500 relative inline-block before:z-10 rotate-1 rotate:1 before:-rotate-1">
          <span className="relative text-zinc-500">alcoholic</span>&nbsp;
        </span>
      </p>
      <p className="text-default mb-5">frontend developer.</p>
    </div>
    <div className="flex gap-4 sm:flex-row flex-col">
      <Button text="Contact me" onClick={() => {}} />
      <Button text="Download CV" download={siteConfig.links.download} />
    </div>
  </Block>
)
