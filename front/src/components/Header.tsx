"use client"; // Marca este componente como un componente del lado del cliente

import React, { useState } from 'react';
import Image from 'next/image';
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import SectionSwitcher from './SectionSwitcher';

const Header: React.FC = () => {
  const [isLoggerIn, setIsLoggedIn] = useState(false);

  const handlelogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className='bg-black text-white py-4'>
      <div className='container mx-auto px-4 flex flex-row items-center justify-between'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Image
            src='/logo.png'
            alt="logo"
            height={60}
            width={60}
          />
        </div>

        {/* Renderizado condicional basado en el estado de inicio de sesión */}
        {!isLoggerIn ? (
          // Botones de inicio de sesión y registro
          <div className="flex flex-row items-center space-x-4">
            <ButtonHeader
              text={'Login in'}
              handlelogin={handlelogin}
            />
            <ButtonHeader
              text={'Sign up'}
              handlelogin={handlelogin}
            />
          </div>
        ) : (
          // Contenido cuando el usuario ha iniciado sesión
          <div className="flex flex-row items-center flex-grow justify-center">
            {/* Ocultar SectionSwitcher en dispositivos móviles */}
            <div className="hidden md:flex flex-row items-center justify-center flex-grow">
              <SectionSwitcher />
            </div>

            {/* SearchBar y DropDown */}
            <div className="flex flex-row items-center space-x-4 ml-auto">
              <SearchBar />
              <DropDown />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;