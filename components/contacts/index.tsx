import clsx from 'clsx'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
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
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        {siteConfig.contacts.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            href={card.link}
            Icon={card.icon}
          />
        ))}
      </div>
    </section>
  )
}
