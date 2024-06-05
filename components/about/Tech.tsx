import NextLink from 'next/link'
import { SiNextdotjs, SiNextui, SiTailwindcss, SiFramer } from 'react-icons/si'
import { Block } from '@/components/about'

export const Tech = () => (
  <div className="col-span-12 row-span-2 md:col-span-5 grid grid-cols-2 gap-4">
    <Block
      initial={{
        rotate: '2.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className="bg-blue min-h-24 border-2 shadow-xl"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiNextdotjs className="drop-shadow-md" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '3.3deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className="bg-secondary min-h-24 border-2 shadow-xl"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiNextui className="drop-shadow-md" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '-2.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className="bg-success min-h-24 border-2 shadow-xl"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiTailwindcss className="drop-shadow-md" />
      </NextLink>
    </Block>
    <Block
      initial={{
        rotate: '-3.5deg',
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className="bg-pink min-h-24 border-2 shadow-xl"
    >
      <NextLink
        href="#"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <SiFramer className="drop-shadow-md" />
      </NextLink>
    </Block>
  </div>
)
