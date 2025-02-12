import React, { useState } from "react";
import { IAuthProps } from "@/interface/globalTypes";
import { useAuthStore } from "@/store/useAuthStore";
import { loginApiRequest } from "@/server/loginAuth";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react"; // Importamos el ícono de loading

const Login: React.FC<IAuthProps> = ({
  setIsAuthModalOpen,
  setIsSignUpModalOpen
}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para loading
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
    setIsLoading(true); // Activamos el loading
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
      setIsLoading(false); // Desactivamos el loading al terminar
    }
  };

  const handleCreateAccount = () => {
    setIsAuthModalOpen(false);
    setIsSignUpModalOpen(true);
  };


  return (
    <div className="flex w-full fixed z-[1] text-white top-0 bg-blue-gradient min-h-[100vh] justify-center items-center">
      <button
        onClick={() => setIsAuthModalOpen(false)}
        className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
      >
        <img src="/closebutton.svg" alt="close" className="w-[0.8rem] h-[0.8rem]" />
      </button>
      <div className="w-[80%]  h-[25rem] md:h-[35rem] flex flex-row border-[#152175] border-solid border-[1px]">
        <form 
          onSubmit={handleLogin}
          className="flex flex-col md:w-[50%] w-full md:h-[35rem] overflow-auto bg-black p-[3rem]"
        >
          <div className="flex flex-row items-center w-fit mx-auto">
            <img src="/logo.png" alt="logo" className="w-auto h-[1.5rem] md:h-[3rem] mr-[1rem]" />
            <h1 className="font-extrabold text-[1.5rem] md:text-[3rem]">DTV</h1>
          </div>
          <h2 className="mt-[2rem] text-[1rem] md:text-[1.5rem]">Login in for DTV</h2>
          <div className="flex flex-col mt-[1.5rem]">
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="enter your email"
              className="border-[#0C1A62] border-solid border-[1px] rounded-[8px] w-full p-[1rem] text-white bg-transparent"
              required
            />
            <input
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="enter your password"
              className="mt-[1rem] border-[#0C1A62] border-[1px] border-solid rounded-[8px] w-full p-[1rem] text-white bg-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-[3rem] w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-[1rem] mx-auto rounded flex items-center justify-center"
            disabled={isLoading} // Desactiva el botón mientras está cargando
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="ml-[1rem]">Cargando...</span>
              </>
            ) : (
              <>
                Log In
                <img className="ml-[1rem]" src="/VectorArrowRight.png" alt="" />
              </>
            )}
          </button>
          <p className="mt-[1.5rem]">Forgot password?</p>
          <button
            type="button"
            onClick={handleCreateAccount}
            className="cursor-pointer w-full border-[1px] border-white border-solid rounded-[8px] p-[1rem] m-auto mt-4"
          >
            Create Account
          </button>
        </form>
        <div className="hidden md:block w-[50%] bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default Login;
