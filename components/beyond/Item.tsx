import { HobbiesCard } from '@/types'

export const Item = ({ name, description, Icon }: HobbiesCard) => {
  return (
    <div>
      {name} {description} <Icon />
    </div>
  )
}
