import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

const shuffle = (array: (typeof siteConfig.hobbies)[0][]) => {
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

const generateHobbies = () => {
  return shuffle(siteConfig.hobbies).map((hobby) => {
    const Icon = hobby.icon

    return (
      <motion.div
        key={hobby.id}
        layout
        transition={{ duration: 2, type: 'spring' }}
        className="flex justify-center items-center min-h-28 first:text-yellow text-beige transition-colors"
      >
        <Icon className="text-6xl drop-shadow-md" />
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
  const timeoutRef = useRef<any>(null)
  const [icons, setIcons] = useState(generateHobbies())

  const shuffleIcons = useCallback(() => {
    const newIcons = generateHobbies()
    setIcons(newIcons)
    setName(siteConfig.hobbies[0].name)
    setText(siteConfig.hobbies[0].description)
    timeoutRef.current = setTimeout(shuffleIcons, 5000)
  }, [setName, setText])

  useEffect(() => {
    shuffleIcons()

    return () => clearTimeout(timeoutRef.current)
  }, [shuffleIcons])

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-1">
      {icons.map((sq) => sq)}
    </div>
  )
}
