import { FaDownload } from 'react-icons/fa6'
import { ButtonProps } from '@/types/interfaces'
import styles from '@/styles/button.module.css'

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  download,
  ariaLabel,
}) => {
  if (download) {
    return (
      <a
        href={download}
        download
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={styles.button}
      >
        <FaDownload />
        {text}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
