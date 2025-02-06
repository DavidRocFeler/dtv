'use client';

import { useState } from 'react';
import Image from 'next/image';

const AuthModal = () => {
  const [currentView, setCurrentView] = useState<'signup' | 'login' | 'password'>('signup');

  return (
    <div className="w-full fixed z-[9999] text-white top-0 bg-blue-gradient min-h-[100vh]">
      <div className="absolute top-8 w-16 h-16 bg-black rounded-full">
        <Image
          src="/public/Vector(1).svg"
          alt="close"
          width={12}
          height={12}
          className="absolute top-[35%] left-[35%]"
        />
      </div>

      <div className="min-h-[40rem] bg-black">
        <form className="md:grid md:grid-cols-2 md:gap-8 md:mt-20">
          {/* Sign Up View */}
          <div className={`mt-20 p-12 ${currentView !== 'signup' && 'hidden'}`}>
            <div className="flex justify-center gap-4 text-sm">
              <Image src="/public/logo.svg" alt="logo" width={40} height={40} />
              <h1>DTV</h1>
            </div>

            <div className="pt-8">
              <label className="text-sm">Sign Up for TreamersTV</label>
              <input
                type="email"
                placeholder="enter your email"
                className="mt-12 border-4 border-[#0C1A62] rounded-lg w-full p-4 text-white bg-transparent"
              />
            </div>

            <p className="mt-8 mb-4 text-sm">or get started with one of your socials</p>

            <div className="flex justify-between mt-12">
              {['tiktok', 'x', 'facebook', 'apple'].map((social) => (
                <Image
                  key={social}
                  src={`/public/${social}.svg`}
                  alt={social}
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <button
              className="mt-12 w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-2 rounded flex items-center justify-center"
              onClick={() => setCurrentView('password')}
              type="button"
            >
              SIGN UP
              <svg 
                className="ml-8 w-12 h-auto mt-4"
                viewBox="0 0 20 16"
                fill="currentColor"
              >
                <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM4 4.5H15V3.5H4V4.5Z" />
              </svg>
            </button>

            <p className="mt-8">
              Already have an account?{' '}
              <span
                className="text-white cursor-pointer"
                onClick={() => setCurrentView('login')}
              >
                Log in
              </span>
            </p>
          </div>

          {/* Login View */}
          <div className={`mt-20 p-12 ${currentView !== 'login' && 'hidden'}`}>
            <div className="flex justify-center gap-4 text-sm">
              <Image src="/public/logo.svg" alt="logo" width={40} height={40} />
              <h1>DTV</h1>
            </div>

            <h2 className="mt-8 text-xl">Login in for DTV</h2>

            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="enter your email"
                className="mt-12 border-4 border-[#0C1A62] rounded-lg w-full p-4 text-white bg-transparent"
              />
              <input
                type="password"
                placeholder="enter your password"
                className="mt-4 border-4 border-[#0C1A62] rounded-lg w-full p-4 text-white bg-transparent"
              />
            </div>

            <button className="mt-12 w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-2 rounded flex items-center justify-center">
              Log In
              <svg 
                className="ml-8 w-12 h-auto mt-4"
                viewBox="0 0 20 16"
                fill="currentColor"
              >
                <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM4 4.5H15V3.5H4V4.5Z" />
              </svg>
            </button>

            <p className="mt-8">Forgot password?</p>
            <button
              className="w-full border-2 border-white rounded p-6 mt-4"
              onClick={() => setCurrentView('signup')}
            >
              Create Account
            </button>
          </div>

          {/* Password View */}
          <div className={`mt-20 p-12 max-h-[90vh] overflow-y-auto ${currentView !== 'password' && 'hidden'}`}>
            <div className="flex justify-center gap-4 text-sm">
              <Image src="/public/logo.svg" alt="logo" width={40} height={40} />
              <h1>DTV</h1>
            </div>

            <div className="mt-20 text-sm leading-tight">
              <h2>Create your password</h2>
              <p>Create a password that&apos;s secure and easy to remember.</p>
            </div>

            <div className="mt-20 underline">
              <p>davidrocfeler@gmail.com</p>
            </div>

            <div className="flex flex-col gap-8 mt-8">
              <input
                type="password"
                placeholder="Password"
                className="border-4 border-[#0C1A62] rounded-lg w-full p-4 text-white bg-transparent"
              />
              <input
                type="password"
                placeholder="Repeat password"
                className="border-4 border-[#0C1A62] rounded-lg w-full p-4 text-white bg-transparent"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 text-sm">
              {['Must contain numbers', 'At least 8 characters', 'Passwords match', 'Hard to guess'].map((text) => (
                <div key={text} className="flex gap-4">
                  <div className="h-4 w-4 border-2 border-[#0C1A62] rounded-full" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="text-2xl mb-12">
              <p>By clicking continue, you state you have read and agree to TreamersTV Terms of Service and Privacy Policy</p>
            </div>

            <button className="w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-2 rounded flex items-center justify-center">
              Continue
              <svg 
                className="ml-8 w-12 h-auto mt-4"
                viewBox="0 0 20 16"
                fill="currentColor"
              >
                <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM4 4.5H15V3.5H4V4.5Z" />
              </svg>
            </button>
          </div>

          {/* Right Column Features */}
          <div className="hidden md:flex md:flex-col md:justify-center md:gap-12 md:items-center md:text-sm bg-[url('/imageForm.png')] bg-cover">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex justify-center items-center gap-8">
                <Image src="/public/VectorUpload.png" alt="upload" width={24} height={24} />
                <h2>Unlimited Streaming & Uploads</h2>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
