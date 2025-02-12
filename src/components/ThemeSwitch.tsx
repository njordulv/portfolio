import { useEffect, useState } from 'react'
import { IoInvertMode, IoInvertModeOutline } from 'react-icons/io5'

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light' // SSR-фикс
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-1 rounded-lg bg-transparent transition-all text-color hover:text-red dark:hover:text-yellow"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <IoInvertMode size={21} />
      ) : (
        <IoInvertModeOutline size={21} />
      )}
    </button>
  )
}
