import { TbLoader2 } from 'react-icons/tb'

export const Preloader = () => {
  return (
    <div className="flex gap-1 mx-auto items-center justify-center mt-[-3.5rem] h-screen">
      <TbLoader2
        size={44}
        className="animate-[var(--animation-spin)] text-default"
      />
    </div>
  )
}
