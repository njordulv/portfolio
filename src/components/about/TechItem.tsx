import { Block } from '@/components/about'
import { TechStackProps } from '@/types/interfaces'

export const TechItem: React.FC<TechStackProps> = ({
  name,
  rotate,
  color,
  link,
  Icon,
}) => {
  return (
    <Block
      initial={{
        rotate: rotate,
        scale: 1.4,
        opacity: 0,
      }}
      whileHover={{
        rotate: '0',
        scale: 1.1,
        zIndex: 1,
      }}
      className={`${color} min-h-24 border-2 shadow-xl`}
    >
      <a
        href={link}
        aria-label={name}
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-4xl text-beige"
      >
        <Icon className="drop-shadow-md" />
      </a>
    </Block>
  )
}
