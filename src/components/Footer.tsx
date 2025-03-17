import { LiaCopyrightSolid } from 'react-icons/lia'
import { siteConfig } from '@/config/site'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-col md:flex-row items-center justify-center text-[12px] md:text-[16px] mx-auto max-w-lg md:max-w-7xl p-5 gap-1 bg-coal/50 rounded-xl border-2 border-black shadow-xl">
      <div className="flex flex-row gap-1">
        <span className="text-red dark:text-primary flex items-center gap-1">
          <LiaCopyrightSolid />
          {year} {siteConfig.footer.title}.{' '}
        </span>
        <span className="text-color">{siteConfig.footer.rights}</span>
      </div>
      <span className="text-zinc-400">
        {siteConfig.footer.developed}
        <Link
          to={siteConfig.links.github}
          className="dark:hover:text-primary hover:text-danger transition-all"
        >
          {siteConfig.author}
        </Link>
      </span>
    </footer>
  )
}

export default Footer
