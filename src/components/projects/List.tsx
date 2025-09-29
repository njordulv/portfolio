import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Preloader } from '@/components/Preloader'
import { Item } from '@/components/projects/Item'
import { ProjectProps } from '@/types/interfaces'
import { siteConfig } from '@/config/site'
import { Variants } from 'framer-motion'

const variants: Variants = {
  offscreen: {
    opacity: 0,
    rotate: -6,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const fetchRepos = async () => {
  const res = await fetch(siteConfig.repos, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) throw new Error(`HTTP error ${res.status}`)
  return res.json()
}

export const List = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['repos'],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 10,
  })

  const sortedByDate = useMemo(() => {
    return data
      ? [...data].sort(
          (a: ProjectProps, b: ProjectProps) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      : []
  }, [data])

  if (isError) return <p className="text-pink">{siteConfig.errorData}</p>
  if (isLoading || !data) return <Preloader />

  const showOnly = sortedByDate.slice(0, 9)

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={variants}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-6"
      >
        {showOnly.map((project: ProjectProps) => (
          <m.div
            key={project.name}
            variants={variants}
            className="flex flex-col gap-4 justify-between p-5 bg-coal rounded-lg border-2 border-black shadow-xl"
          >
            <Item project={project} />
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  )
}
