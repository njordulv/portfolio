import { LiaCopyrightSolid } from 'react-icons/lia'

export const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-row items-center justify-center p-5 gap-1 bg-coal/80 rounded-xl border-2 border-black shadow-xl">
      <span className="dark:text-primary text-red flex items-center gap-1">
        <LiaCopyrightSolid />
        {year} {`DC`}.
      </span>
      <span className="text-color">All Rights Reserved</span>
    </footer>
  )
}
