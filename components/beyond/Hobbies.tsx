'use client'

import { motion, Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site'

const variants = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
} as Variants

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
        className="w-full h-full flex justify-center items-center"
      >
        <Icon className="text-6xl text-white" />
      </motion.div>
    )
  })
}

const ShuffleGrid = ({
  setName,
  setText,
}: {
  setName: (name: string) => void
  setText: (text: string) => void
}) => {
  const timeoutRef = useRef<any>(null)
  const [squares, setSquares] = useState(generateHobbies())

  useEffect(() => {
    shuffleSquares()

    return () => clearTimeout(timeoutRef.current)
  }, [])

  const shuffleSquares = () => {
    const newSquares = generateHobbies()
    setSquares(newSquares)
    setName(siteConfig.hobbies[0].name)
    setText(siteConfig.hobbies[0].description)
    timeoutRef.current = setTimeout(shuffleSquares, 5000)
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  )
}

export const Hobbies = () => {
  const [name, setName] = useState(siteConfig.hobbies[0].name)
  const [text, setText] = useState(siteConfig.hobbies[0].description)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-6xl mx-auto">
      <div>
        <motion.div
          key={name}
          initial="initial"
          animate="animate"
          variants={variants}
          className="text-4xl md:text-6xl font-semibold"
        >
          {name}
        </motion.div>
        <p className="text-base md:text-lg text-black my-4">{text}</p>
      </div>
      <ShuffleGrid setText={setText} setName={setName} />
    </div>
  )
}
