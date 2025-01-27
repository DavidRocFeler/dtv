import { AuthButtonProps } from '@/interface/globalTypes'
import React from 'react'
import styles from '../styles/ButtonHeader.module.css';


const ButtonHeader:React.FC<AuthButtonProps>= ({text,handlelogin}) => {
  return (
    <div>
      <button className={`${styles.ButtonGradient}  w-24 h-10`} onClick={handlelogin}>
        {text}
      </button>
    </div>
  )
}

export default ButtonHeader
