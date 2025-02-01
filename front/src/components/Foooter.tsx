"use client"
import FAQComponent from './FAQComponent';
import SideSecction from './FooterSecction';
import { FaqsHelpers } from '../helpers/Faqs.helpers';
import { useState } from 'react';
import FollowNetwork from './FollowNetwork';

const Foooter: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Maneja el clic en la flecha
  const handleArrowClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className='flex flex-col mdd:flex-row'>
      <div className='hidden  mdd:block'>
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
      <div className='flex flex-col items-start justify-start'>
        <SideSecction />
        <FollowNetwork/>
      </div>
      

    </div>
  );
};

export default Foooter;