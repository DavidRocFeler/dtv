'use client'
import CardMovieCover from '@/components/CardMovieCover';
import CardTrends from '@/components/CardTrends';
import ProgressBar from '@/components/ProgressBar';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import React, { useState, useEffect } from 'react';
import { IMovieDataProps } from '@/interface/globalTypes';

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
    <div className='flex flex-row-reverse justify-around pt-[5rem] pb-[2rem]'>
      <div className='w-[27%] flex flex-col'>
        <h1 className='text-[2rem]'> Most viewed </h1>
        <ProgressBar activeStep={activeStep} onButtonClick={handleButtonClick} />
        {filteredMovies.map((item) => (
          <CardTrends key={item.id} {...item} />
        ))}
      </div>
      <div className='grid grid-cols-4 grid-rows-6 gap-y-[1rem] w-[60%]'>
        {movieDataHelpers.slice(0, 24).map((item) => (
          <CardMovieCover key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};