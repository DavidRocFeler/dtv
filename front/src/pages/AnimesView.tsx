import ListCardSection from '@/components/ListCardSection';
import React from 'react';

const AnimesView: React.FC = () => {
  return (
    <div className='grid grid-cols-1 gap-y-[1rem] bg-gradient-to-r from-[#141414] to-black'>
      <ListCardSection section="Animes" />
      <ListCardSection section="Animes" />
      <ListCardSection section="Animes" />
    </div>
  );
};

export default AnimesView;