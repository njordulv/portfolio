import clsx from 'clsx'
import { fontMono } from '@/config/fonts'
import { SiGmail, SiLinkedin, SiGithub, SiTelegram } from 'react-icons/si'
import { Card } from '@/components/contacts/Card'

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2
        className={clsx(
          fontMono.variable,
          'text-center text-pink drop-shadow-md mb-8'
        )}
      >
        Contacts
      </h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 px-1">
        <Card
          title="Linkedin"
          subtitle="Dmitriy Chastukhin"
          href="https://www.linkedin.com/in/dmitriy-chastukhin/"
          Icon={SiLinkedin}
        />
        <Card
          title="Email"
          subtitle="njordulv@gmail.com"
          href={`mailto:njordulv@gmail.com`}
          Icon={SiGmail}
        />
        <Card
          title="Github"
          subtitle="njordulv"
          href="https://github.com/njordulv"
          Icon={SiGithub}
        />
        <Card
          title="Telegram"
          subtitle="@hdimon"
          href={`https://t.me/hdimon`}
          Icon={SiTelegram}
        />
      </div>
    </section>
  )
}
