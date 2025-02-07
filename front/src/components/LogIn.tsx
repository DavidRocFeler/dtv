import React from "react";
import { IAuthProps } from "@/interface/globalTypes";


const Login: React.FC<IAuthProps> = ({ setIsAuthModalOpen, setIsSignUpModalOpen}) => {
    const handleCreateAccount = () => {
        setIsAuthModalOpen(false);
        setIsSignUpModalOpen(true);
      };

    return (
            <div className="flex w-full fixed z-[9999] text-white top-0 bg-blue-gradient min-h-[100vh] justify-center items-center">
                <button 
                    onClick={() => setIsAuthModalOpen(false)}
                    className="absolute top-[1rem] left-[1rem] h-[2.5rem] w-[2.5rem] bg-black rounded-full flex items-center justify-center"
                >
                    <img src="/closebutton.svg" alt="close"  className="w-[0.8rem] h-[0.8rem]" />
                </button>

                <div className="w-[80%] h-[35rem] flex flex-row border-[#152175] border-solid border-[1px]">
                    <form className="flex flex-col w-[50%] h-[35rem] overflow-auto bg-black p-[3rem]">
                        <div className="flex flex-row items-center w-fit mx-auto">
                            <img src="/logo.png" alt="logo" className="w-auto h-[3rem] mr-[1rem]" />
                            <h1 className="font-extrabold text-[3rem]">DTV</h1>
                        </div>

                        <h2 className="mt-[2rem] text-[1.5rem]">Login in for DTV</h2>

                        <div className="flex flex-col mt-[1.5rem]">
                            <input
                                type="email"
                                placeholder="enter your email"
                                className=" border-[#0C1A62] border-solid border-[1px] rounded-[8px] w-full p-[1rem] text-white bg-transparent"
                            />
                            <input
                                type="password"
                                placeholder="enter your password"
                                className="mt-[1rem] border-[#0C1A62] border-[1px] border-solid rounded-[8px] w-full p-[1rem] text-white bg-transparent"
                            />
                        </div>

                        <button className=" mt-[3rem] w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-[1rem] mx-auto rounded flex items-center justify-center">
                            Log In
                            <img className="ml-[1rem]" src="/VectorArrowRight.png" alt="" />
                        </button>

                        <p className="mt-[1.5rem]">Forgot password?</p>
                        <button 
                        onClick={handleCreateAccount}
                        className="cursor-pointer w-full border-[1px] border-white border-solid rounded-[8px] p-[1rem] m-auto mt-4">
                            Create Account
                        </button>
                    </form>

                    <div className="w-[50%] bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat"></div>
                </div>
            </div>
        
    );
};

export default Login;

