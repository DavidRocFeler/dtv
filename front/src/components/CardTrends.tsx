import { IMovieDataProps } from '@/interface/globalTypes';
import React from 'react';

const CardTrends: React.FC<IMovieDataProps> = ({ poster, title, views, lastViewed, duration, year }) => {
  return (
    <div className='flex flex-row mt-[1rem]'>
      <button>
        <img
            src={poster}
            alt={title}
            className='mr-[1rem] w-auto h-[150px] transition-transform duration-300 hover:scale-105 hover:shadow-lg'
        />
       </button>

      <div className='flex flex-col w-[60%]'>
        <p className='mb-[0.5rem] text-[#B2B2B2]'>{title}</p>
        <p className='mb-[0.5rem] text-[0.9rem] text-[#B2B2B2]'>{duration} - {year}</p>
        <p className='text-[0.9rem] text-[#0BADEE]'>{views} Views</p>
      </div>
    </div>
  );
};

export default CardTrends;