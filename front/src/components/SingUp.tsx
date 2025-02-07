'use client'
import { ISignUpProps } from "@/interface/globalTypes"
import React from "react"
import { useState } from "react";

const SingUp: React.FC<ISignUpProps> = ({ setIsSignUpModalOpen, setIsAuthModalOpen, setIsCreatePasswordOpen, setUserEmail  }) => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      // Validación básica de email
      setIsValidEmail(newEmail.includes('@') && newEmail.includes('.'));
    };
  
    const handleContinue = () => {
      if (isValidEmail) {
        setUserEmail(email);
        setIsSignUpModalOpen(false);
        setIsCreatePasswordOpen(true);
      }
    };
  
    const handleLogin = () => {
        setIsSignUpModalOpen(false);
        setIsAuthModalOpen(true);
    };

  return (
    <div className="flex w-full fixed z-[9999] text-white top-0 bg-blue-gradient min-h-[100vh] justify-center items-center">

        <button 
            onClick={() => setIsSignUpModalOpen(false)}
            className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
                    >
            <img src="/closebutton.svg" alt="close"  className="w-[0.8rem] h-[0.8rem]" />
        </button>

        <div className="w-[80%] h-[35rem] flex flex-row border-[#152175] border-solid border-[1px]">
            <div className="w-[50%] bg-black p-[3rem] h-[35rem] overflow-auto">
                                 
                <div className="flex flex-row items-center w-fit mx-auto">
                    <img src="/logo.png" alt="logo" className="w-auto h-[3rem] mr-[1rem]" />
                    <h1 className="font-extrabold text-[3rem]">DTV</h1>
                </div>

                <h2 className="mt-[2rem] text-[1.5rem]">Sign up for DTV</h2>

                <form className="pt-8" onSubmit={(e) => e.preventDefault()}>
                <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="enter your email"
                className=" border-[#0C1A62] border-solid border-[1px] rounded-[8px] w-full p-[1rem] text-white bg-transparent"
                />

                <p className="mt-[2rem] text-[1rem] text-[#B2B2B2] w-fit m-auto">or get started with one of your socials</p>

                <div className="flex justify-between w-[70%] mx-auto mt-[3rem]">
                <img src="/TiktokLogo.svg" alt="" />
                <img src="/XLogo.svg" alt="" />
                <img src="/FacebookLogo.svg" alt="" />
                <img src="/VectorAple.svg" alt="" />
                </div>

                <button 
                onClick={handleContinue}
                className=" mt-[3rem] w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-[1rem] mx-auto rounded flex items-center justify-center">
                Sign up
                <img className="ml-[1rem]" src="/VectorArrowRight.png" alt="" />
                </button>

                </form>

                <p className="mt-[2rem] text-[#B2B2B2]">
                Already have an account?{' '}
                <span 
                onClick={handleLogin}
                className="text-white cursor-pointer">
                Log in
                </span>
                </p>
            </div>

            <div className="w-[50%] bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>

    </div>
  )
}

export default SingUp


