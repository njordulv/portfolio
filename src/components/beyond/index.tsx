import { m, LazyMotion, domAnimation, Variants } from 'framer-motion'
import { fontMono } from '@/config/fonts'
import { Hobbies } from '@/components/beyond/Hobbies'

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
}

const Beyond = () => {
  return (
    <section className="beyond" id="beyond">
      <LazyMotion features={domAnimation}>
        <m.div
          initial="offscreen"
          whileInView="onscreen"
          variants={variants}
          viewport={{ once: true }}
          className="mx-auto grid grid-flow-dense grid-cols-12 gap-6 md:px-6"
        >
          <div className="col-span-12 row-span-2 lg:col-start-3 lg:col-end-13 shadow-xl flex flex-col rounded-xl border-2 border-black bg-green text-black p-5 sm:p-7">
            <h2
              className={`${fontMono.className}
                 text-yellow drop-shadow-md mb-4`}
            >
              Beyond Coding
            </h2>
            <div className="text-lg mb-8">
              <p>{`Outside of work I'm probably in the middle of this activities`}</p>
            </div>
            <Hobbies />
          </div>
        </m.div>
      </LazyMotion>
    </section>
  )
}

export default Beyond
