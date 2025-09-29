import { Link } from 'react-scroll'
import { Code } from '@heroui/react'
import { siteConfig } from '@/config/site'
import { Block } from '@/components/about/Block'
import Button from '@/components/Button'
import styles from '@/styles/button.module.css'

const colorClasses: Record<string, string> = {
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  success: 'bg-success/20 text-success',
  danger: 'bg-danger/20 text-danger',
  pink: 'bg-pink/20 text-pink',
}

export const Intro = () => {
  const lastIndex = siteConfig.techCode.length - 1

  return (
    <Block className="col-span-12 row-span-2 md:col-span-7 lg:col-span-8 flex flex-col justify-between bg-none shadow-none text-default border-0 p-0 w-7/7 lg:w-6/7 text-xl md:text-2xl">
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
                className={`pl-2 pr-2 rounded-md text-[1.1rem] bottom-1 mb-0.5 ${
                  colorClasses[color] ?? `text-${color}`
                }`}
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
      <div className="flex gap-4 md:flex-row lg:mt-0 mt-6 flex-col">
        <Link
          to="contacts"
          smooth={true}
          duration={700}
          className={styles.button}
          aria-label={siteConfig.about.contactAria}
        >
          {siteConfig.about.contactText}
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
