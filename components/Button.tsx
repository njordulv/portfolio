import Link from 'next/link'
import { FaDownload } from 'react-icons/fa6'
import styles from '@/styles/button.module.css'

interface ButtonProps {
  text: string
  onClick?: () => void
  download?: string
}

const Button: React.FC<ButtonProps> = ({ text, onClick, download }) => {
  if (download) {
    return (
      <Link
        href={download}
        download
        rel="noopener noreferrer"
        className={styles.button}
      >
        <FaDownload />
        {text}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
