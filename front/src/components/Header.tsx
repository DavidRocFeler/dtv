"use client";
import React, { useState } from 'react';
import ButtonHeader from './ButtonHeader';
import DropDown from './DropDown';
import SearchBar from './SearchBar';
import SectionSwitcher from './SectionSwitcher';
import Link from 'next/link';
import SingUp from './SingUp';
import Login from './LogIn';
import CreatePassword from './CreatePassword';

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isLoggerIn, setIsLoggedIn] = useState(false);
  const [isSingUp, setIsSIgnUp] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCreatePasswordOpen, setIsCreatePasswordOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handlelogin = () => {
    setIsLoggedIn(true);
    setIsSIgnUp(true);
  };

  const handleOpenLoginModal = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleOpenSignUpModal = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  const handleSearchExpand = (expanded: boolean) => {
    setIsSearchExpanded(expanded);
  };

  return (
    <header className="bg-black text-white fixed py-[1rem] h-[5rem] z-[9999] w-full flex items-center">
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ml-[0.5rem] md:ml-[1rem]">
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
          <div className='flex flex-row space-x-[1rem] absolute right-[1rem] xxl:right-[3rem]'>

            <div>
              <ButtonHeader
                text={'Sign up'}
                handlelogin={handleOpenSignUpModal}
              />
            </div>

            <div className="hidden s:block">
                <ButtonHeader
                  text={'Log in'}
                  handlelogin={handleOpenLoginModal}
                />
            </div>

          </div>
        ) : (
          <div className="flex flex-row items-center flex-grow justify-center">
            <div className={`${isSearchExpanded ? 'hidden' : 'flex'} md:flex flex-row items-center justify-center flex-grow`}>
              <SectionSwitcher />
            </div>
            <div className="flex flex-row items-center space-x-4 ml-auto mr-[0] sm:mr-[2rem]">
              <SearchBar onExpand={handleSearchExpand} />
              <div className={`${isSearchExpanded ? 'hidden' : 'flex'} md:flex`}>
                <DropDown />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modales */}
      {isLoginModalOpen && (
        <Login 
          setIsAuthModalOpen={setIsLoginModalOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
        />
      )}
      {isSignUpModalOpen && (
        <SingUp 
          setIsSignUpModalOpen={setIsSignUpModalOpen}
          setIsAuthModalOpen={setIsLoginModalOpen}
          setIsCreatePasswordOpen={setIsCreatePasswordOpen}
          setUserEmail={setUserEmail}
        />
      )}
       {isCreatePasswordOpen && (
        <CreatePassword
          setIsCreatePasswordOpen={setIsCreatePasswordOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
          userEmail={userEmail}
        />
      )}
    </header>
  );
};

export default Header;
