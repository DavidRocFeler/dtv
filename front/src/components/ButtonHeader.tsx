import { AuthButtonProps } from '@/interface/globalTypes'
import React from 'react'

const ButtonHeader:React.FC<AuthButtonProps>= ({text,handlelogin}) => {
  return (
    <div>
      <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded' onClick={handlelogin}>
        {text}
      </button>
    </div>
  )
}

export default ButtonHeader
