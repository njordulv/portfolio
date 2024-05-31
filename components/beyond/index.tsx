import clsx from 'clsx'
import { fontMono } from '@/config/fonts'

export const Beyond = () => {
  return (
    <section className="beyond" id="beyond">
      <div className="mx-auto grid grid-flow-dense grid-cols-12 gap-6 sm:px-6">
        <div className="col-span-12 row-span-2 sm:col-start-3 sm:col-end-13 shadow-xl flex flex-col rounded-xl border-2 border-black bg-success text-black p-7">
          <h2
            className={clsx(
              fontMono.variable,
              'text-right text-yellow drop-shadow-md mb-8'
            )}
          >
            Beyond Coding
          </h2>
          <div>
            {/* 
            1. music
            2. guitar, bass, etc
            3. photo & video
            4. cycling
            5. traveling
            6. autotuning
            7. movie & tv
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
