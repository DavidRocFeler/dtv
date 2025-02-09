"use client";
import React, { useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import SectionSwitcher from "./SectionSwitcher";
import Link from "next/link";
import SingUp from "./SingUp";
import Login from "./LogIn";
import CreatePassword from "./CreatePassword";
import { useAuthStore } from "@/store/useAuthStore";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCreatePasswordOpen, setIsCreatePasswordOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Nuevo estado
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const [delayedSearchExpanded, setDelayedSearchExpanded] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authToken = Cookies.get("authToken");
      setIsAuthenticated(!!authToken);
      setIsAuthChecked(true); // Marcamos que ya verificamos la autenticación
    };

    checkAuth();
  }, []);

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

  if (!expanded) {
      // Si se cierra el input, esperamos 3 segundos antes de mostrar SectionSwitcher
      setTimeout(() => {
        setDelayedSearchExpanded(false);
      }, 300); // 3000ms = 3 segundos
    } else {
      // Si se abre el input, ocultamos SectionSwitcher inmediatamente
      setDelayedSearchExpanded(true);
    }
  };

  // No renderizamos nada hasta que se verifique la autenticación
  if (!isAuthChecked) {
    return (
      <header className="bg-black text-white fixed py-[1rem] px-[1rem] h-[5rem] z-[9999] w-full flex items-center">
        <img src="/logo.png" alt="Logo" className="w-[50px] xxl:w-[60px] h-auto" />
      </header>
    );
  }

  return (
    <header className="bg-black text-white fixed py-[1rem] h-[5rem] z-[9999] w-full flex items-center">
      <div className="flex flex-row items-center justify-between">
        <div className="flex-shrink-0 ml-[0.5rem] md:ml-[1rem]">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="w-[50px] xxl:w-[60px] h-auto" />
          </Link>
        </div>
        
        {!isAuthenticated ? (
          <div className="flex flex-row space-x-[1rem] absolute right-[1rem] xxl:right-[3rem]">
            <ButtonHeader text={"Sign up"} handlelogin={handleOpenSignUpModal} />
            <div className="hidden s:block">
              <ButtonHeader text={"Log in"} handlelogin={handleOpenLoginModal} />
            </div>
          </div>
        ) : (
          <div className="flex flex-row absolute right-[1rem] md:right-[2rem] w-[58%] md:w-[51%] items-center">
            {/* Ocultar SectionSwitcher con retraso */}
            <div className={`${delayedSearchExpanded ? "hidden" : "flex"} xxl:flex flex-row items-center`}>
              <SectionSwitcher />
            </div>
      
            <div className="flex flex-row items-center space-x-4 ml-auto mr-[0] ">
              <SearchBar onExpand={handleSearchExpand} />
              <div className={`${isSearchExpanded ? "hidden" : "flex"} xxl:flex`}>
                <DropDown />
              </div>
            </div>
          </div>
        )}
      </div>

      {isLoginModalOpen && (
        <Login setIsAuthModalOpen={setIsLoginModalOpen} setIsSignUpModalOpen={setIsSignUpModalOpen} />
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