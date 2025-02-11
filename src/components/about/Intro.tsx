import { Link } from 'react-scroll'
import { Code } from '@heroui/react'
import { siteConfig } from '@/config/site'
import { Block } from '@/components/about/Block'
import Button from '@/components/Button'

export const Intro = () => {
  const lastIndex = siteConfig.techCode.length - 1

  return (
    <Block className="col-span-12 row-span-2 md:col-span-8 flex flex-col justify-between bg-none shadow-none text-default border-0 p-0 w-7/7 lg:w-6/7 text-xl md:text-2xl">
      <div className="flex flex-col gap-4">
        <h1>{siteConfig.about.title}</h1>
        <p className="text-zinc-400">{siteConfig.about.role}</p>
        <p>{siteConfig.about.subtitle}</p>
        <p className="text-zinc-400">
          I specialize in{' '}
          {siteConfig.techCode.map(({ name, color }, index) => (
            <span key={name}>
              <Code
                color={color}
                className={`rounded-md text-[1.1rem] bottom-1 mb-0.5 text-${color}`}
              >
                {name}
              </Code>
              {index < lastIndex - 1
                ? ', '
                : index === lastIndex
                ? ''
                : ' and '}
            </span>
          ))}
          , building seamless and dynamic user experiences.
        </p>
      </div>
      <div className="flex gap-4 sm:flex-row md:mt-0 mt-6 flex-col">
        <Link to="contacts" smooth={true} duration={700} href="#contacts">
          <Button
            text={siteConfig.about.contactText}
            aria-label={siteConfig.about.contactAria}
          />
        </Link>
        <Button
          text={siteConfig.about.downloadText}
          aria-label={siteConfig.about.downloadText}
          download={siteConfig.links.download}
        />
      </div>
    </Block>
  )
}
