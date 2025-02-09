'use client'
import { IMovieDataProps } from '@/interface/globalTypes'
import React from 'react'
import { useState, useEffect } from 'react';

const CardMovieCover: React.FC<IMovieDataProps> = ({title, year, director, duration, genre, rate, poster, section, review}) => {
  const [truncatedReview, setTruncatedReview] = useState(review);
  const formattedGenres = genre.join(' - ');
  const [isHovered, setIsHovered] = useState(false);

  const truncText = (text: string, maxWords: number = 13): string => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  const handleResize = () => {
    console.log('Viewport width (ancho dispositivo):', window.innerWidth);
    if (window.innerWidth <= 400) {
      setTruncatedReview(truncText(review));
    } else {
      setTruncatedReview(review);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [review]); 
    
  return (
    <div 
      className="relative flex flex-col items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de la imagen con overlay */}
      <div className="relative w-auto h-[193px] xs:h-[203px] md:h-[291px] xxxl:h-[321px] xxxll:h-[361px] tv:h-[401px] overflow-hidden">
        {/* Imagen */}
        <img
          className={`transition-all ease-out duration-300 w-auto m-auto h-full ${isHovered ? "opacity-10 scale-105" : "opacity-100 scale-100"}`}
          src={poster}
          alt={title}
        />

        {/* Overlay que aparece al hacer hover */}
        <div 
          className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white py-[1rem] px-[0rem] xxs:px-[1rem] 
                     transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem]">{duration} - {year}</p>
          <p className="text-center text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem] mb-[2rem]">{formattedGenres}</p>
          <p className="text-center text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] xxxl:text-[1rem] xxxll:text-[1.1rem] tv:text-[1.2rem]">{truncatedReview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovieCover;
