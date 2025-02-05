import { Image } from "@heroui/image"
import { Block } from '@/components/about'

export const Photo = () => (
  <Block className="col-span-12 row-span-2 md:col-span-4 bg-success border-2 shadow-xl p-6 overflow-hidden">
    <figure className="relative flex justify-center items-end w-full h-full">
      <Image
        src="/photo.png"
        width={300}
        height={318}
        alt="Dmitriy Photo"
        className="drop-shadow-lg"
      />
      <figcaption className="sr-only">Dmitriy Photo</figcaption>
      <div className="absolute w-full h-full max-w-52 sm:max-h-52 -rotate-[-13deg] -skew-x-[48deg] left-auto bottom-[-25px] bg-beige rounded-full shadow-xl"></div>
    </figure>
  </Block>
)
