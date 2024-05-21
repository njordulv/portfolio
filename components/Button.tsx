import styles from '@/styles/button.module.css'

interface ButtonProps {
  text: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
