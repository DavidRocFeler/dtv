import { IMovieDataProps } from '@/interface/globalTypes'
import React from 'react'

const CardMovieCover: React.FC<IMovieDataProps> = ({title, year, director, duration, genre, rate, poster, section, review}) => {
  return (
        <div className='object-contain'>
            <img className='w-auto m-auto h-[193px] xs:h-[203px] md:h-[291px]' src={poster} alt="" />
        </div>
    );
};

export default CardMovieCover;