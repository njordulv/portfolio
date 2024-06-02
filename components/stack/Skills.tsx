'use client'

import clsx from 'clsx'
import { Tooltip } from '@nextui-org/tooltip'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { List } from '@/components/stack/List'

export const Skills = () => (
  <div className="relative col-span-12 row-span-2 md:col-span-9 shadow-xl flex flex-col rounded-xl border-2 border-black bg-beige text-black p-7">
    <h2 className={clsx(fontMono.variable, 'text-red mb-4')}>Tech Stack</h2>
    {Object.entries(siteConfig.techStackCategiries).map(
      ([categoryName, categoryItems]) => (
        <div
          key={categoryName}
          className="grid sm:grid-cols-2 grid-cols-1 gap-2 items-center border-b-1 border-dashed border-stone-400 last:border-b-0 py-2"
        >
          <h3 className={'text-black text-xl font-medium'}>{categoryName}</h3>
          <ul className="flex gap-2 flex-wrap">
            {siteConfig.techStackIcons
              .filter((item) => categoryItems.includes(item.label))
              .map((item, index) => (
                <List
                  key={index}
                  className="flex gap-2 border-default"
                  whileHover={{
                    rotate: '-6deg',
                    scale: 1.3,
                  }}
                >
                  <Tooltip
                    content={item.label}
                    classNames={{
                      content: 'border-1 text-beige bg-black',
                    }}
                  >
                    <span className="shadow-lg shadow-black bg-black w-10 h-10 text-beige border-1 border-beige rounded-full flex justify-center items-center hover:bg-red transition-all cursor-pointer">
                      <item.icon size="20" />
                    </span>
                  </Tooltip>
                </List>
              ))}
          </ul>
        </div>
      )
    )}
  </div>
)
