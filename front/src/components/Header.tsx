"use client"; // Marca este componente como un componente del lado del cliente

import React, { useState, useEffect } from 'react'; // Importa useEffect
import Image from 'next/image';
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import SectionSwitcher from './SectionSwitcher';
import styles from '../styles/ButtonHeader.module.css';
import Link from 'next/link'; // Importa Link si no lo tienes

const Header: React.FC = () => {
  const [isLoggerIn, setIsLoggedIn] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Estado para controlar la hidratación

  // Efecto para marcar el componente como hidratado
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlelogin = () => {
    setIsLoggedIn(true);
  };

  // Si el componente no está hidratado, retorna la estructura básica
  if (!isHydrated) {
    return (
      <header className="bg-black text-white py-4">
        <div className="px-4 flex flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4">
            <Link href="/">
              <Image
                src="/logo.png" // Asegúrate de que esta ruta sea correcta
                alt="Logo"
                width={60} // Define un ancho fijo
                height={60} // Define un alto fijo
                className="Logo"
              />
            </Link>
          </div>

          {/* Botones de inicio de sesión y registro (no hidratado) */}
          <div className="flex flex-row items-center space-x-4 mr-4">
            <button className={`${styles.ButtonGradient}`}>Login in</button>
            <button className={`${styles.ButtonGradient}`}>Sign up</button>
          </div>
        </div>
      </header>
    );
  }

  // Si el componente está hidratado, retorna la estructura completa
  return (
    <header className="bg-black text-white py-4">
      <div className="px-4 flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
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
            <div className="flex flex-row items-center space-x-4 ml-auto mr-[2rem]">
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