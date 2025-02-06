import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Block } from '@/components/about'
import Button from '@/components/Button'

export const Intro = () => {
  const navigate = useNavigate()

  return (
    <Block className="col-span-12 row-span-2 md:col-span-8 flex flex-col bg-none shadow-none text-default border-0 p-0 text-2xl sm:text-3xl">
      <div className={clsx(fontMono.variable)}>
        <h1 className="mb-4">{`Hi, I'm Dmitriy.`}</h1>
        <p>{`I'm a front-end developer.`}</p>
        <p className="text-zinc-400 mb-5">{`Let's connect!`}</p>
      </div>
      <div className="flex gap-4 sm:flex-row flex-col">
        <Button text="Contact me" onClick={() => navigate('#contacts')} />
        <Button text="Download CV" download={siteConfig.links.download} />
      </div>
    </Block>
  )
}
