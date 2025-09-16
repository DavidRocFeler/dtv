import React, { useState } from "react"
import { ICreatePasswordProps } from "@/interface/globalTypes"
import { Loader2 } from "lucide-react"

const CreatePassword: React.FC<ICreatePasswordProps> = ({ 
  setIsCreatePasswordOpen, 
  userEmail, 
  setIsSignUpModalOpen 
}) => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [passwordErrors, setPasswordErrors] = useState({
    hasNumber: false,
    minLength: false,
    passwordsMatch: false,
    isStrong: false
  })

  const handleCloseModal = () => {
    setIsCreatePasswordOpen(false)
    setIsSignUpModalOpen(false)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    
    // Validaciones en tiempo real
    setPasswordErrors({
      hasNumber: /\d/.test(newPassword),
      minLength: newPassword.length >= 8,
      passwordsMatch: newPassword === confirmPassword,
      isStrong: newPassword.length >= 8 && /\d/.test(newPassword) && /[!@#$%^&*]/.test(newPassword)
    })
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)
    
    setPasswordErrors(prev => ({
      ...prev,
      passwordsMatch: password === newConfirmPassword
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordErrors.hasNumber && passwordErrors.minLength && passwordErrors.passwordsMatch) {
      setIsLoading(true)
      // Simulamos una pequeña demora para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Aquí iría la lógica para crear la cuenta
      setIsLoading(false)
      // Cerramos el modal después del registro exitoso
      handleCloseModal()
    }
  }

  return (
    <div className="flex w-full fixed z-[1] text-white top-0 bg-blue-gradient min-h-[100vh] pt-20 lg:pt-0 justify-center lg:items-center ">
      <button 
        onClick={handleCloseModal}
        className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
      >
        <img src="/closebutton.svg" alt="close" className="w-[0.8rem] h-[0.8rem]" />
      </button>

      <div className="w-[90%] h-fit lg:h-[35rem] lg:w-[80%] flex flex-col lg:flex-row border-[#152175] border-solid border-[1px] bg-black lg:bg-transparent">
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col w-full lg:w-1/2 bg-black p-6 lg:overflow-auto"
        >
          <div className="flex flex-row items-center w-fit mx-auto mb-6 lg:mb-8">
            <img src="/logo.png" alt="logo" className="w-auto h-12 mr-4" />
            <h1 className="font-extrabold text-2xl">DTV</h1>
          </div>

          <h2 className="text-lg lg:text-xl font-semibold mb-2">Create your password</h2>
          <p className="text-[#B2B2B2] text-sm lg:text-base mb-6 lg:mb-8">
            Create a password that's secure and easy to remember.
          </p>

          <p className="text-[#B2B2B2] text-sm lg:text-base mb-2">
            {userEmail}
          </p>
          
          <div className="flex flex-col mb-4 lg:mb-6">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="border-[#0C1A62] border-solid border-[1px] rounded-lg w-full p-3 lg:p-4 text-white bg-transparent mb-3"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Repeat password"
              className="border-[#0C1A62] border-solid border-[1px] rounded-lg w-full p-3 lg:p-4 text-white bg-transparent"
              required
            />
          </div>

          <div className="mb-6 lg:mb-8">
            <p className={`w-full flex flex-row items-center text-xs lg:text-sm mb-2 ${passwordErrors.hasNumber ? 'text-green-500' : 'text-[#B2B2B2]'}`}>
              <svg className="mr-2" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke={passwordErrors.hasNumber ? "#10B981" : "#0C1A62"} strokeWidth="2" />
                {passwordErrors.hasNumber && <circle cx="9" cy="9" r="4" fill="#10B981" />}
              </svg>
              Must contain numbers
            </p>
          
            <p className={`w-full flex flex-row items-center text-xs lg:text-sm mb-2 ${passwordErrors.minLength ? 'text-green-500' : 'text-[#B2B2B2]'}`}>
              <svg className="mr-2" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke={passwordErrors.minLength ? "#10B981" : "#0C1A62"} strokeWidth="2" />
                {passwordErrors.minLength && <circle cx="9" cy="9" r="4" fill="#10B981" />}
              </svg>
              At least 8 characters
            </p>
        
            <p className={`w-full flex flex-row items-center text-xs lg:text-sm mb-2 ${passwordErrors.passwordsMatch ? 'text-green-500' : 'text-[#B2B2B2]'}`}>
              <svg className="mr-2" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke={passwordErrors.passwordsMatch ? "#10B981" : "#0C1A62"} strokeWidth="2" />
                {passwordErrors.passwordsMatch && <circle cx="9" cy="9" r="4" fill="#10B981" />}
              </svg>
              Passwords match
            </p>
      
            <p className={`w-full flex flex-row items-center text-xs lg:text-sm mb-2 ${passwordErrors.isStrong ? 'text-green-500' : 'text-[#B2B2B2]'}`}>
              <svg className="mr-2" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" stroke={passwordErrors.isStrong ? "#10B981" : "#0C1A62"} strokeWidth="2" />
                {passwordErrors.isStrong && <circle cx="9" cy="9" r="4" fill="#10B981" />}
              </svg>
              Hard to guess
            </p>
          </div>

          <p className="text-[#B2B2B2] text-xs lg:text-sm mb-6 lg:mb-8">
            By clicking continue, you state you have read and agree to TreamersTV Terms of Service and Privacy Policy
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-3 lg:p-4 rounded-lg flex items-center justify-center disabled:opacity-50"
            disabled={isLoading || !(passwordErrors.hasNumber && passwordErrors.minLength && passwordErrors.passwordsMatch)}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span>Creating account...</span>
              </>
            ) : (
              <>
                <span>Continue</span>
                <img className="ml-2" src="/VectorArrowRight.png" alt="" />
              </>
            )}
          </button>
        </form>

        <div className="hidden lg:flex lg:w-1/2 bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat items-center justify-center p-8">
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

export default CreatePassword