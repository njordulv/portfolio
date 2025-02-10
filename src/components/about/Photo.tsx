import { Block } from '@/components/about'

export const Photo = () => (
  <Block className="col-span-12 row-span-2 md:col-span-4 bg-success border-2 shadow-xl p-6 overflow-hidden">
    <figure className="relative flex justify-center items-end w-full h-full">
      <picture className="z-10 relative">
        <source srcSet="/photo.webp 300w" sizes="300px" type="image/webp" />
        <source srcSet="/photo.png 300w" sizes="300px" type="image/png" />
        <img
          src="/photo.png"
          width="300"
          height="318"
          alt="Dmitriy, Frontend Developer"
          decoding="async"
          className="drop-shadow-lg rounded-3xl"
        />
      </picture>
      <div className="absolute w-full h-full max-w-52 max-h-52 -rotate-[-13deg] -skew-x-[48deg] left-auto bottom-[-25px] bg-beige rounded-full shadow-xl"></div>
    </figure>
  </Block>
)
