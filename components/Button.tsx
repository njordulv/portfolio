import Link from 'next/link'
import { FaDownload } from 'react-icons/fa6'
import { ButtonProps } from '@/types'
import styles from '@/styles/button.module.css'

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
