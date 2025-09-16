import React, { useState } from "react";
import { IAuthProps } from "@/interface/globalTypes";
import { useAuthStore } from "@/store/useAuthStore";
import { loginApiRequest } from "@/server/loginAuth";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const Login: React.FC<IAuthProps> = ({
  setIsAuthModalOpen,
  setIsSignUpModalOpen
}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setIsAuthenticated } = useAuthStore();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginApiRequest(userData);
      if (!response || !response.token) {
        throw new Error("Login fallido");
      }
      Cookies.set("authToken", response.token, {
        secure: true,
        sameSite: "strict",
        expires: 7
      });
      setIsAuthenticated(true);
      router.push('/home');
      setIsAuthModalOpen(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error de autenticación",
        text: "Email o contraseña incorrectos.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    setIsAuthModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  return (
    <div className="flex w-full fixed z-[1] text-white top-0 bg-blue-gradient min-h-[100vh] pt-20 lg:pt-0 justify-center lg:items-center">
      <button
        onClick={() => setIsAuthModalOpen(false)}
        className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
      >
        <img src="/closebutton.svg" alt="close" className="w-[0.8rem] h-[0.8rem]" />
      </button>

      <div className="w-[90%] h-fit lg:h-[35rem] lg:w-[80%] flex flex-col-reverse lg:flex-row border-[#152175] border-solid border-[1px] bg-black lg:bg-transparent">
        <form 
          onSubmit={handleLogin}
          className="flex flex-col w-full lg:w-1/2 bg-black p-6 lg:p-12 h-[21rem] lg:h-auto overflow-auto"
        >
          <div className="flex flex-row items-center w-fit mx-auto mb-6 lg:mb-8">
            <img src="/logo.png" alt="logo" className="w-auto h-12 mr-4" />
            <h1 className="font-extrabold text-2xl">DTV</h1>
          </div>
          
          <h2 className="text-lg lg:text-xl font-semibold mb-2">Login to DTV</h2>
          
          <div className="flex flex-col mb-4 lg:mb-6">
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-[#0C1A62] border-solid border-[1px] rounded-lg w-full p-3 lg:p-4 text-white bg-transparent mb-3"
              required
            />
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border-[#0C1A62] border-solid border-[1px] rounded-lg w-full p-3 lg:p-4 text-white bg-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-3 lg:p-4 rounded-lg flex items-center justify-center disabled:opacity-50 mb-4"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <span>Log In</span>
                <img className="ml-2" src="/VectorArrowRight.png" alt="" />
              </>
            )}
          </button>

          <p className="text-[#B2B2B2] text-sm mb-4">Forgot password?</p>
          
          <button
            type="button"
            onClick={handleCreateAccount}
            className="cursor-pointer w-full border border-white border-solid rounded-lg p-3 lg:p-4 text-center"
          >
            Create Account
          </button>
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
  );
};

export default Login;

