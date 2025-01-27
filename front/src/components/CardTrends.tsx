import { IMovieDataProps } from '@/interface/globalTypes';
import React from 'react';

const CardTrends: React.FC<IMovieDataProps> = ({ poster, title, views, lastViewed, duration, year }) => {
  return (
    <div className='mt-[1rem]
    flex flex-col md:flex-row
    '>
      <button>
        <img
            src={poster}
            alt={title}
            className='mr-[1rem] w-auto h-[150px] transition-transform duration-300 hover:scale-105 hover:shadow-lg
            xxxlll:h-[200px]
            '
        />
       </button>

      <div className='flex flex-col w-[50%] s:w-[100%] md:w-[60%] mt-[0.5rem] md:mt-0'>
        <p className='mb-[0.5rem] xxxlll:text-[1.2rem]  text-[#B2B2B2]'>{title}</p>
        <p className='mb-[0.5rem] text-[0.9rem] xxxlll:text-[1.1rem] text-[#B2B2B2]'>{duration} - {year}</p>
        <p className='mb-[1.5rem] text-[0.9rem] xxxlll:text-[1.1rem]  text-[#0BADEE]'>{views} Views</p>
      </div>
    </div>
  );
};

export default CardTrends;