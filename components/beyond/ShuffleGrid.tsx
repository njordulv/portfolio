'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { Hobby } from '@/types'

const shuffle = (array: Hobby[]): Hobby[] => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

const generateHobbies = (hobbies: Hobby[]): JSX.Element[] => {
  return shuffle(hobbies).map((hobby) => {
    const Icon = hobby.icon

    return (
      <motion.div
        key={hobby.id}
        layout
        transition={{ duration: 2, type: 'spring' }}
        className="flex justify-center items-center sm:min-h-28 min-h-20 first:text-yellow text-beige transition-colors"
      >
        <Icon className="sm:text-6xl text-4xl drop-shadow-md" />
      </motion.div>
    )
  })
}

export const ShuffleGrid = ({
  setName,
  setText,
}: {
  setName: (name: string) => void
  setText: (text: string) => void
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [icons, setIcons] = useState<JSX.Element[]>([])

  const shuffleIcons = useCallback(() => {
    setIcons(generateHobbies(siteConfig.hobbies))
    setName(siteConfig.hobbies[0].name)
    setText(siteConfig.hobbies[0].description)
    timeoutRef.current = setTimeout(shuffleIcons, 5000)
  }, [setName, setText])

  useEffect(() => {
    shuffleIcons()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [shuffleIcons])

  return <div className="grid grid-cols-4 grid-rows-2 gap-1">{icons}</div>
}
