'use client'
import CardMovieCover from '@/components/CardMovieCover';
import CardTrends from '@/components/CardTrends';
import ProgressBar from '@/components/ProgressBar';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import React, { useState, useEffect } from 'react';
import { IMovieDataProps } from '@/interface/globalTypes';
import styles from '../styles/Home.module.css'

export const HomeView: React.FC = () => {
  console.log('Styles loaded:', styles);
  const [activeStep, setActiveStep] = useState(0); 
  const [filteredMovies, setFilteredMovies] = useState<IMovieDataProps[]>([]);

  const getDailyMovies = (): IMovieDataProps[] => {
    const today = new Date().toISOString().split('T')[0]; 
    return movieDataHelpers
      .filter((movie) => movie.lastViewed.split('T')[0] === today) 
      .sort((a, b) => b.views - a.views) 
  };

  const getWeeklyMovies = (): IMovieDataProps[] => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); 
    return movieDataHelpers
      .filter((movie) => new Date(movie.lastViewed) >= oneWeekAgo) 
      .sort((a, b) => b.views - a.views) 
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
            <a href='#ContainerMoreVideos' className='text-[#666666] shadow-custom px-[1rem] py-[0.5rem] rounded-[8px] border-solid border-[#0BADEE] border-[1px] w-[90%] xxs:w-[85%] xss:w-[81%]  m-auto text-center block s:hidden text-[1rem] ssm:text-[1.5rem] mb-[1.5rem]'>Press for more videos</a>
            <div className={`${styles.MovieCover} gap-y-[1rem] pt-[2.5rem]
            grid grid-row-12 grid-cols-2 
          `}>
              {movieDataHelpers.map((item) => (
                <CardMovieCover key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div id='ContainerMoreVideos' className='flex flex-col
          p-0 s:bg-black s:pl-[1rem] s:pr-[1rem] s:py-[1rem] xxl:pl-[2rem] xxl:pt-[2rem] rounded-[8px] h-fit
          w-[80%] xss:w-[75%] s:w-[33%] ssm:w-[40%] md:w-[36%] xl:w-[27%] xxxl:w-[30%]
          mt-[4rem] s:mt-[0.9rem] xxl:mt-0 m-auto s:m-0 s:ml-[1rem] xl:ml-[2rem]'>
            <h1 className='text-[1.5rem] ssm:text-[2rem]'> Most viewed </h1>
            <ProgressBar activeStep={activeStep} onButtonClick={handleButtonClick} />
            {filteredMovies.map((item) => (
              <CardTrends key={item.id} {...item} />
            ))}
          </div>
        </div>
    </>
  );
};

export default HomeView;