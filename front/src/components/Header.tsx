"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
const Header:React.FC = () => {

  const [isLoggerIn,setIsLoggedIn]=useState(false);

  const handlelogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <header className='header bg-black text-white py-4'>
      <div className='mx-auto header__logo flex flex-row  bg-green-500 w-[100%]'>
              <Image 
                    src='/logo.png'
                    alt="logo"
                    height={100}
                    width={100}
               />
               {
                !isLoggerIn ? (
                  <div className="auth-buttons ml-auto mr-[2rem] flex flex-row items-center space-x-4">
                    <ButtonHeader
                    text={'Login in'}
                    handlelogin={handlelogin}
                 
                />
                    <ButtonHeader
                    text={'Sign up'}
                    handlelogin={handlelogin}
                />
                  </div>

                ):(
                    <DropDown/>                )
               }
          </div>
 
       
  
    </header>
  )
}

export default Header;