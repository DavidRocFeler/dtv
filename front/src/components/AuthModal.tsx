'use client';

import { useState } from 'react';
import Image from 'next/image';
import SingUp from './SingUp';
import LoginUp from './LoginUp';
import PasswordChange from './PasswordChange';



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
          <SingUp currentView={currentView} setCurrentView={setCurrentView}  />

          {/* Login View */}
          <LoginUp currentView={currentView} setCurrentView={setCurrentView}/>
          {/* Password View */}
          <PasswordChange currentView={currentView} setCurrentView={setCurrentView}/>
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
