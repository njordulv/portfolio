import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import styles from '@/styles/button.module.css'

export const NotFound = () => {
  return (
    <main className="container mx-auto max-w-7xl min-h-[calc(100vh-50px)] flex flex-col items-center justify-center gap-10 py-5 md:pt-10 sm:pb-24 pb-10">
      <section className="flex flex-col gap-6 text-center text-lg text-default">
        <h2>{siteConfig.notFound.title}</h2>
        <p>{siteConfig.notFound.description}</p>
        <Link className={styles.button} to="/">
          {siteConfig.notFound.button}
        </Link>
      </section>
    </main>
  )
}
