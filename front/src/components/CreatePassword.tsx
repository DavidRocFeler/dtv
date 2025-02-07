import React from "react"
import { ICreatePasswordProps } from "@/interface/globalTypes";

const CreatePassword: React.FC<ICreatePasswordProps> = ({ setIsCreatePasswordOpen, userEmail, setIsSignUpModalOpen }) => {
    const handleCloseModal = () => {
        setIsCreatePasswordOpen(false);
        setIsSignUpModalOpen(false);
      };
    

  return (
    <div className="flex w-full fixed z-[1111] text-white top-0 bg-blue-gradient min-h-[100vh] justify-center items-center">

        <button 
            onClick={handleCloseModal}
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

                    <h2 className="mt-[2rem] text-[1.5rem]">Create your password</h2>
                    <p className="text-[#B2B2B2] font-bold text-[0.9rem] mt-[0.5rem]">Create a password that's secure and easy to remember.</p>

                    <p id="EmailDynamic" className="text-[#B2B2B2] font-bold text-[0.9rem] mt-[4rem]">{userEmail}</p>
                    <form className="mt-[1rem]">
                        <input
                        type="password"
                        placeholder="password"
                        className=" border-[#0C1A62] border-solid border-[1px] rounded-[8px] w-full p-[1rem] text-white bg-transparent"
                        />
                         <input
                        type="password"
                        placeholder="repeat password"
                        className=" border-[#0C1A62] mt-[1rem] border-solid border-[1px] rounded-[8px] w-full p-[1rem] text-white bg-transparent"
                        />
                    </form>

                    <div className="mt-[3rem]">
                           
                            <p className="w-full flex flex-row items-center text-[0.8rem] text-[#B2B2B2] mb-[0.5rem] p-0">
                            <svg className="mr-[0.5rem] mt-[0.5rem]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_107_1901)">
                                <circle cx="9" cy="5" r="4.5" stroke="#0C1A62" shapeRendering="crispEdges"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_107_1901" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_1901"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_1901" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            Must contain numbers
                            </p>
                        
                            <p className="w-full flex flex-row items-center text-[0.8rem] text-[#B2B2B2] mb-[0.5rem] p-0">
                            <svg className="mr-[0.5rem] mt-[0.5rem]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_107_1901)">
                                <circle cx="9" cy="5" r="4.5" stroke="#0C1A62" shapeRendering="crispEdges"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_107_1901" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_1901"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_1901" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            At least 8 characters
                            </p>
                     
                            <p className="w-full flex flex-row items-center text-[0.8rem] text-[#B2B2B2] mb-[0.5rem] p-0">
                            <svg className="mr-[0.5rem] mt-[0.5rem]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_107_1901)">
                                <circle cx="9" cy="5" r="4.5" stroke="#0C1A62" shapeRendering="crispEdges"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_107_1901" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_1901"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_1901" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            Passwords match
                            </p>
                  
                            <p className="w-full flex flex-row items-center text-[0.8rem] text-[#B2B2B2] mb-[0.5rem] p-0">
                            <svg className="mr-[0.5rem] mt-[0.5rem]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_107_1901)">
                                <circle cx="9" cy="5" r="4.5" stroke="#0C1A62" shapeRendering="crispEdges"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_107_1901" x="0" y="0" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_1901"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_1901" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                            Hard to guess
                            </p>

                    </div>

                    <p className="mt-[4rem] text-[1rem] text-[#B2B2B2] w-fit">By clicking continue, you state you have read and agree to TreamersTV Terms of Service and Privacy Policy </p>

                    <button className=" mt-[1rem] w-full bg-gradient-to-r from-[#0E1F75] to-[#081142] p-[1rem] mx-auto rounded flex items-center justify-center">
                        Continue
                        <img className="ml-[1rem]" src="/VectorArrowRight.png" alt="" />
                    </button>

            </div>

            <div className="w-[50%] bg-[url('/CoverAuthImage.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>

    </div>
  )
}

export default CreatePassword;