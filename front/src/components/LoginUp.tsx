import Image from 'next/image';

const LoginUp = ({currentView, setCurrentView}: { currentView: 'signup' | 'login' | 'password'; setCurrentView: (view: 'signup' | 'login' | 'password') => void }) => {
  return (
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
  )
}

export default LoginUp
