import { useEffect, useState } from 'react'
import { IoInvertMode, IoInvertModeOutline } from 'react-icons/io5'
import clsx from 'clsx'

export interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'cursor-pointer p-1 rounded-lg bg-transparent transition-all',
        className
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <IoInvertMode size={21} className="text-color hover:opacity-80" />
      ) : (
        <IoInvertModeOutline
          size={21}
          className="text-color hover:opacity-80"
        />
      )}
    </button>
  )
}
