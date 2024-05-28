'use client'

import clsx from 'clsx'
import { siteConfig } from '@/config/site'
import { fontMono } from '@/config/fonts'
import { ExperienceItem } from '@/types'
import { Card } from '@/components/experience/Card'

export const Experience = () => {
  return (
    <section className="w-full" id="experience">
      <div className="flex flex-col items-stretch mx-auto max-w-5xl sm:px-6">
        <h2 className={clsx(fontMono.variable, 'text-center text-default')}>
          Experience
        </h2>
        {siteConfig.experience.map((item: ExperienceItem, index: number) => (
          <div
            className="sm:w-[51%] sm:mb-[-24px] w-full mb-6"
            key={index}
            style={{ alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
          >
            <Card color={item.color}>
              {item.year && (
                <span className="absolute top-3 right-4">{item.year}</span>
              )}
              <h3 className={clsx(fontMono.variable)}>{item.company}</h3>
              {item.department && (
                <h4 className={clsx(fontMono.variable)}>{item.department}</h4>
              )}
              <b>{item.position}</b>
              <ul className="list-disc pl-4 text-black">
                {item.list.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
