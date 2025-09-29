import { m, LazyMotion, domAnimation } from 'framer-motion'
import { fontMono } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Card } from '@/components/contacts/Card'
import { Variants } from 'framer-motion'

const containerVariants: Variants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
    y: 4,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2
        className={`${fontMono.className} text-center text-pink drop-shadow-md mb-4`}
      >
        Contacts
      </h2>
      <div className="text-center text-lg text-default mb-8">
        <p>Shoot me an email if you want to connect.</p>
        <p>{`You can also reach my Telegram if that's more your speed!`}</p>
      </div>
      <LazyMotion features={domAnimation}>
        <m.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:pl-6 md:pr-6"
        >
          {siteConfig.contacts.map((card) => (
            <m.div key={card.title} variants={cardVariants}>
              <Card
                title={card.title}
                subtitle={card.subtitle}
                href={card.link}
                Icon={card.icon}
              />
            </m.div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  )
}

export default Contacts
