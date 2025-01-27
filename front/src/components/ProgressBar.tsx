'use client';
import React from 'react';

interface ProgressBarProps {
  activeStep: number;
  onButtonClick: (step: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ activeStep, onButtonClick }) => {
  return (
    <div className="w-full flex flex-col items-center gap-5 mt-[2rem] mb-[2rem]">
      {/* Botones */}
      <div className="flex flex-row w-full justify-around text-[1rem] xxxlll:text-[1.2rem] ">
        {['Day', 'Week'].map((label, index) => (
          <button
            key={label}
            onClick={() => onButtonClick(index)}
            className={`px-[0rem] py-[0rem] rounded-lg transition-colors duration-300 ${
              index === activeStep ? "text-[#0BADEE]" : "text-[#B2B2B2]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Barra de progreso */}
      <div className="flex gap-[0rem] w-full">
        {['Day', 'Week'].map((_, index) => (
          <div
            key={index}
            className={`h-[0.1rem] w-[100vw] transition-colors duration-300 ${
              index === activeStep ? "bg-[#0BADEE]" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;