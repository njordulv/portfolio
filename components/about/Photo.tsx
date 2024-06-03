'use client'

import { Image } from '@nextui-org/image'
import { Block } from '@/components/about'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const Photo = () => (
  <Block className="col-span-12 row-span-2 md:col-span-4 bg-success border-2 shadow-xl p-6 flex place-content-center relative overflow-hidden">
    <Image
      src={`${basePath}/photo.png`}
      width={300}
      height={318}
      alt="Dmitriy Photo"
      className="drop-shadow-lg"
    />
    <div className="absolute w-full h-full max-w-52 sm:max-h-52 -rotate-[-13deg] -skew-x-[48deg] left-auto bottom-0 bg-beige rounded-full shadow-xl"></div>
  </Block>
)
