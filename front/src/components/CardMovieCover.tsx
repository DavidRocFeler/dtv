'use client'
import { IMovieDataProps } from '@/interface/globalTypes'
import React from 'react'
import { useState, useEffect } from 'react';

const CardMovieCover: React.FC<IMovieDataProps> = ({title, year, director, duration, genre, rate, poster, section, review}) => {
    const [truncatedReview, setTruncatedReview] = useState(review);
    const formattedGenres = genre.join(' - ');
    
    const truncText = (text: string, maxWords: number = 13): string => {
        const words = text.split(' ');
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
      };

      useEffect(() => {
        console.log('Viewport width:', window.innerWidth);
        if (window.innerWidth <= 400) {
          setTruncatedReview(truncText(review));
        } else {
          setTruncatedReview(review);
        }
      }, [review]);
    
  return (
        <div className='relative flex items-center justify-center cursor-pointer'>
            <div className="object-contain  hover:border-solid hover:border-white hover:border-[3px]
            w-auto h-[193px] xs:h-[203px] md:h-[291px] xxxl:h-[321px] xxxll:h-[361px] tv:h-[401px] overflow-hidden"
            >
                <img
                className="hover:scale-505 hover:opacity-[0.1] hover:p-[1rem] transition-all ease-out duration-300 w-auto m-auto h-[193px] xs:h-[203px] md:h-[291px] xxxl:h-[321px] xxxll:h-[361px] tv:h-[401px]"
                src={poster}
                alt={title}
                />
            </div>
            <article className='absolute top-[1rem] z-[-1] m-auto w-[100px] xs:w-[110px] md:w-[169px] xxxl:w-[170px] xxxll:w-[200px] tv:w-[230px]'>
                <p className='text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem]' >{duration} - {year} </p>
                <p className='text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem] mb-[2rem]'> {formattedGenres} </p>
                <p className='text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem] '> {truncatedReview} </p>
            </article>
        </div>
    );
};

export default CardMovieCover;