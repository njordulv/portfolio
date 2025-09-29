import { Block } from '@/components/about/Block'
import React from 'react'

export const Photo = React.memo(() => (
  <Block className="col-span-12 row-span-2 md:col-span-5 lg:col-span-4 bg-green border-2 shadow-xl p-6 overflow-hidden">
    <figure className="relative flex justify-center items-end w-full h-full">
      <link
        rel="preload"
        href="/photo-600.webp"
        as="image"
        type="image/webp"
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        href="/photo-300.webp"
        as="image"
        type="image/webp"
        media="(max-width: 767px)"
      />

      <picture className="z-10 relative">
        <source
          srcSet="/photo-300.webp 300w,
                  /photo-600.webp 600w"
          sizes="(max-width: 768px) 100vw, 300px"
          type="image/webp"
        />
        <source
          srcSet="/photo-300.png 300w,
                  /photo-600.png 600w"
          sizes="(max-width: 768px) 100vw, 300px"
          type="image/png"
        />
        <img
          src="/photo-300.png"
          width="300"
          height="318"
          alt="Dmitriy, Frontend Developer"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="drop-shadow-lg rounded-3xl w-full h-auto"
          style={{
            aspectRatio: '300 / 318',
            contentVisibility: 'auto',
          }}
        />
      </picture>
      <div className="absolute w-full h-full max-w-52 max-h-52 -rotate-[-13deg] -skew-x-[48deg] left-auto bottom-[-25px] bg-beige rounded-full shadow-xl" />
    </figure>
  </Block>
))
