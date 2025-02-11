import { m } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { BlockProps } from '@/types/types'

export const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <m.div
      variants={{
        initial: {
          scale: 1.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: 'spring',
        mass: 4,
        stiffness: 500,
        damping: 50,
      }}
      className={twMerge('rounded-xl text-color border-black', className)}
      {...rest}
    />
  )
}
