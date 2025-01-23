import React from 'react';
import Image from 'next/image';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import CardMovieCover from './CardMovieCover';

const SectionCover: React.FC = () => {
  return (
    <section className='relative'>
        <div className='flex flex-row'>
            <div className='relative hidden md:block w-[80%]'>
                <p className='absolute bottom-[4rem] left-[2rem] text-[3rem] xl:text-[3.5rem] xxl:text-[4.5rem] xxxl:text-[5.5rem] xxxll:text-[6.5rem] xxxlll:text-[7.5rem] tv:text-[8rem]'>Upload your card and enjoy your experience</p>
            </div>
            <div className="w-full flex justify-center md:justify-end">
                <img className='object-cover h-[301px] xs:h-[392px] xl:h-[482px] xxl:h-[520px] xxxl:h-[720px] xxxll:h-[920px] xxxlll:h-[1120px]' src="https://res.cloudinary.com/dkjsqrzoa/image/upload/v1737644167/CoverImage1_owe4p6.jpg" alt="" />
            </div>
        </div>
    
        <div className='grid grid-cols-2 grid-rows-1 ssm:grid-cols-3 w-[98%] m-auto absolute top-[17rem] xs:top-[23rem]'>
            {movieDataHelpers.slice(0,3).map((item) => (
                <CardMovieCover
                key={item.id}
                {...item}
                />
            ))}
        </div>

        <svg height="10" width="100%" className='mt-[11rem] xs:mt-[12rem]'>
            <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#333333] stroke-opacity-50 stroke-[20]'/>
        </svg>

    </section>
  );
};

export default SectionCover;