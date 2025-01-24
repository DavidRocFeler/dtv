"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import SectionSwitcher from './SectionSwitcher';
const Header:React.FC = () => {

  const [isLoggerIn,setIsLoggedIn]=useState(false);

  const handlelogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <header className='heade bg-black text-white py-4'>
      <div className='relative mx-auto header__logo flex flex-row  w-[100%]'>
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
                    <div className='flex flex-row justify-between bg-red-600'>
                          <DropDown/>      
                          <SectionSwitcher/>
                          <SearchBar/> 
                    </div>
                   
                  )
                 
               }
          </div>

       
    </header>
  )
}                                                                                                                                                             

export default Header;