"use client"; // Marca este componente como un componente del lado del cliente

import React, { useState } from 'react'; // Importa useEffect
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import SectionSwitcher from './SectionSwitcher';
import Link from 'next/link'; // Importa Link si no lo tienes

const Header: React.FC = () => {
  const [isLoggerIn, setIsLoggedIn] = useState(false);

  const handlelogin = () => {
    setIsLoggedIn(true);
  };


  // Si el componente está hidratado, retorna la estructura completa
  return (
    <header className="bg-black text-white py-[0.6rem]">
      <div className="px-4 flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-[0rem]">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className='w-[60px] h-auto'
            />
          </Link>
        </div>

        {/* Renderizado condicional basado en el estado de inicio de sesión */}
        {!isLoggerIn ? (
          // Botones de inicio de sesión y registro
          <div className="flex flex-row items-center space-x-4 mr-4">
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
            <div className="flex flex-row items-center space-x-4 ml-auto mr-[0] 
              sm:mr-[2rem] 
            bg-red-500">
              <SearchBar />
              <DropDown />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;