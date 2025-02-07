import { siteConfig } from '@/config/site'
import { TechItem } from '@/components/about/TechItem'

export const TechList = () => (
  <div className="col-span-12 row-span-2 md:col-span-5 grid grid-cols-2 gap-4">
    {siteConfig.techStack.map((item) => (
      <TechItem
        key={item.id}
        name={item.name}
        rotate={item.rotate}
        color={item.color}
        link={item.link}
        Icon={item.icon}
      />
    ))}
  </div>
)
