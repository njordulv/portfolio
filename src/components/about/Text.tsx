import { Block } from '@/components/about/Block'
import { siteConfig } from '@/config/site'

export const Text = () => (
  <Block className="col-span-12 md:col-span-7 text-xl sm:text-2xl row-span-2 leading-snug">
    <div className="flex flex-col gap-4">
      <p>{siteConfig.about.text1}</p>
      <p className="text-zinc-400">{siteConfig.about.text2}</p>
      <p>{siteConfig.about.text3}</p>
    </div>
  </Block>
)
