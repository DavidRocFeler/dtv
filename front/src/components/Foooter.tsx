"use client"
import FAQComponent from './FAQComponent';
import SideSecction from './FooterSecction';
import { FaqsHelpers } from '../helpers/Faqs.helpers';
import { useState } from 'react';

const Foooter: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Maneja el clic en la flecha
  const handleArrowClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className='flex flex-row'>
      <div className='hidden mdd:block'>
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
      <SideSecction />
    </div>
  );
};

export default Foooter;