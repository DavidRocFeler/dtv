'use client'
import React from "react"
import { useState } from "react"
import { ISignUpProps } from "@/interface/globalTypes"
import { Loader2 } from "lucide-react"

const SignUp: React.FC<ISignUpProps> = ({ 
  setIsSignUpModalOpen, 
  setIsAuthModalOpen, 
  setIsCreatePasswordOpen, 
  setUserEmail 
}) => {
  const [email, setEmail] = useState("")
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    // Validación básica de email
    setIsValidEmail(newEmail.includes('@') && newEmail.includes('.'))
  }

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidEmail) {
      setIsLoading(true)
      // Simulamos una pequeña demora para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 1000))
      setUserEmail(email)
      setIsSignUpModalOpen(false)
      setIsCreatePasswordOpen(true)
      setIsLoading(false)
    }
  }

  const handleLogin = () => {
    setIsSignUpModalOpen(false)
    setIsAuthModalOpen(true)
  }

  return (
    <div className="flex w-full fixed z-[1] text-white top-0 bg-blue-gradient min-h-[100vh] pt-20 lg:pt-0 justify-center lg:items-center">
      <button 
        onClick={() => setIsSignUpModalOpen(false)}
        className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
      >
        <img src="/closebutton.svg" alt="close" className="w-[0.8rem] h-[0.8rem]" />
      </button>

      <div className="w-[90%] h-fit lg:w-[80%] flex flex-col-reverse lg:flex-row border-[#152175] border-solid border-[1px] bg-black lg:bg-transparent">
        <form 
          onSubmit={handleContinue}
          className="flex flex-col w-full lg:w-1/2 bg-black p-6 lg:p-12"
        >
          <div className="flex flex-row items-center w-fit mx-auto mb-6 lg:mb-8">
            <img src="/logo.png" alt="logo" className="w-auto h-12 mr-4" />
            <h1 className="font-extrabold text-2xl">DTV</h1>
          </div>
          
          <h2 className="text-lg lg:text-xl font-semibold mb-2">Sign up for DTV</h2>

          <div className="flex flex-col mb-4 lg:mb-6">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="border-[#0C1A62] border-solid border-[1px] rounded-lg w-full p-3 lg:p-4 text-white bg-transparent"
              required
            />
          </div>

          <p className="text-[#B2B2B2] text-xs lg:text-sm text-center mb-4 lg:mb-6">
            or get started with one of your socials
          </p>

          <div className="flex justify-between w-[70%] mx-auto mb-6 lg:mb-8">
            <img src="/TiktokLogo.svg" alt="TikTok" className="h-6 w-6" />
            <img src="/XLogo.svg" alt="X" className="h-6 w-6" />
            <img src="/FacebookLogo.svg" alt="Facebook" className="h-6 w-6" />
            <img src="/VectorAple.svg" alt="Apple" className="h-6 w-6" />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-3 lg:p-4 rounded-lg flex items-center justify-center disabled:opacity-50"
            disabled={!isValidEmail || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Sign up</span>
                <img className="ml-2" src="/VectorArrowRight.png" alt="" />
              </>
            )}
          </button>

          <p className="text-[#B2B2B2] text-xs lg:text-sm text-center mt-4 lg:mt-6">
            Already have an account?{' '}
            <span 
              onClick={handleLogin}
              className="text-white cursor-pointer"
            >
              Log in
            </span>
          </p>
        </form>

        <div className="h-[20rem] lg:h-auto flex lg:w-1/2 bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat items-center justify-center p-8">
          <div className="flex flex-col items-center justify-center gap-6 text-white">
            <div className="flex items-center flex-row gap-4"> 
              <img src="/VectorUpload.png" className="w-6 h-6"/>
              <p className="text-base">Unlimited Streaming & Uploads</p>
            </div>
            <div className="flex flex-row gap-4"> 
              <img src="/VectorUpload.png" className="w-6 h-6"/>
              <p className="text-base">Unlimited Streaming & Uploads</p>
            </div>
            <div className="flex flex-row gap-4"> 
              <img src="/VectorUpload.png" className="w-6 h-6"/>
              <p className="text-base">Unlimited Streaming & Uploads</p>
            </div>
            <div className="flex flex-row gap-4"> 
              <img src="/VectorUpload.png" className="w-6 h-6"/>
              <p className="text-base">Unlimited Streaming & Uploads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp