"use client"
import FAQComponent from './FAQComponent';
import SideSecction from './FooterSecction';
import { FaqsHelpers } from '../helpers/Faqs.helpers';
import { useState } from 'react';
import FollowNetwork from './FollowNetwork';
import { usePathname } from 'next/navigation'; // Importa usePathname

const Foooter: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const rawPathname = usePathname(); // Obtiene la ruta actual
  const pathname = rawPathname || ""; // Evita posibles valores null

  // Verifica si el path es "/home" o empieza con "/section"
  const isSpecialPath = pathname === '/home' || pathname.startsWith('/section');

  // Maneja el clic en la flecha
  const handleArrowClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div 
      className={`flex flex-col pb-[1rem] pt-[2rem] relative 
        ${isSpecialPath ? 'bg-gradient-to-r from-[#141414] to-black' : ''}`}
    >
      {/* Renderiza strokeBlue solo si NO estamos en '/' */}
      {pathname !== '/' && (
        <svg id='strokeBlue' height="10" width="100%" className='mb-[2rem]'>
          <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#0C1A62] stroke-opacity-50 stroke-[5]' />
        </svg>
      )}
      
      <div className='flex flex-row'>
        <div className='hidden mdd:block w-[50%] pl-[1rem]'>
          <h3 className='text-start font-bold mb-[1rem]'>FAQs</h3>
          {FaqsHelpers.map((item) => (
            <FAQComponent
              key={item.id}
              question={item.question}
              answer={item.answer}
              isActive={activeId === item.id}
              onClick={() => handleArrowClick(item.id)} // Envía el ID al hacer clic
            />
          ))}
        </div>
        <div className='flex flex-col ml-0 mdd:ml-auto w-[100%] mdd:w-[50%]'>
          <SideSecction />
          <FollowNetwork/>
        </div>
      </div>

      <div className="text-[#414141] mt-[2rem] px-[1.7rem]">
        2025 Stream-d | developed by Start4
      </div>
        
      <img className='hidden mdd:block absolute w-[3rem] h-auto bottom-4 right-4' src="/logo.png" alt="" />
    </div>
  );
};

export default Foooter;
