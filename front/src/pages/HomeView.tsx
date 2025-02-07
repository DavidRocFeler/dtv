'use client'
import CardMovieCover from '@/components/CardMovieCover';
import CardTrends from '@/components/CardTrends';
import ProgressBar from '@/components/ProgressBar';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import React, { useState, useEffect } from 'react';
import { IMovieDataProps } from '@/interface/globalTypes';
import styles from '../styles/Home.module.css'

export const HomeView: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0); 
  const [filteredMovies, setFilteredMovies] = useState<IMovieDataProps[]>([]);

  const getDailyMovies = (): IMovieDataProps[] => {
    const today = new Date().toISOString().split('T')[0]; 
    return movieDataHelpers
      .filter((movie) => movie.lastViewed.split('T')[0] === today) 
      .sort((a, b) => b.views - a.views) 
      .slice(0, 6); 
  };

  const getWeeklyMovies = (): IMovieDataProps[] => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); 
    return movieDataHelpers
      .filter((movie) => new Date(movie.lastViewed) >= oneWeekAgo) 
      .sort((a, b) => b.views - a.views) 
      .slice(0, 6); 
  };

  useEffect(() => {
    if (activeStep === 0) {
      setFilteredMovies(getDailyMovies()); 
    } else {
      setFilteredMovies(getWeeklyMovies());
    }
  }, [activeStep]);

  const handleButtonClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
        <div className='pt-[10rem] pb-[2rem] md:m-0 bg-gradient-to-r from-[#141414] to-black
        flex flex-col s:flex-row'>
          <div className={`${styles.MovieContent} 
          m-auto s:m-0 s:ml-[1rem] xl:ml-[3rem] xxl:ml-[5rem] xxxl:ml-[4rem]
          w-[100%] s:w-[58%] ssm:w-[52%] sm:w-[50%] md:w-[58%] xl:w-[55%]
          `}>
            <h1 className='w-[90%] xxs:w-[85%] xss:w-[81%]  m-auto text-start block s:hidden text-[1.5rem] ssm:text-[2rem] mb-[2rem]'>Press play</h1>
            <div className={`${styles.MovieCover} gap-y-[1rem]
            grid grid-row-12 grid-cols-2 
          `}>
              {movieDataHelpers.slice(0, 24).map((item) => (
                <CardMovieCover key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className='flex flex-col
          w-[80%] xss:w-[75%] s:w-[33%] ssm:w-[40%] md:w-[36%] xl:w-[27%] xxxl:w-[30%]
          mt-[4rem] s:mt-0 m-auto s:m-0 s:ml-[1rem] xl:ml-[2rem]'>
            <h1 className='text-[1.5rem] ssm:text-[2rem]'> Most viewed </h1>
            <ProgressBar activeStep={activeStep} onButtonClick={handleButtonClick} />
            {filteredMovies.map((item) => (
              <CardTrends key={item.id} {...item} />
            ))}
          </div>
        </div>
        <svg height="10" width="100%" className='mt-[3rem]'>
          <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#0C1A62] stroke-opacity-50 stroke-[5]' />
        </svg>
    </>
  );
};

export default HomeView;