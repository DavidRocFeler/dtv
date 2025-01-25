import React from 'react';
import ListCardScroll from './ListCardScroll';
import { ICovertext, IMovieDataProps } from '@/interface/globalTypes';

interface SectionCoverProps extends ICovertext {
  items: IMovieDataProps[]; 
}

const SectionCover: React.FC<SectionCoverProps> = ({ text, items }) => {
  return (
    <section className='relative py-[3rem]'>
      <div className='flex flex-row'>
        <div className='relative hidden md:block w-[80%]'>
          <p className='absolute bottom-[4rem] left-[2rem] text-[3rem] xl:text-[3.5rem] xxl:text-[4.5rem] xxxl:text-[5.5rem] xxxll:text-[6.5rem] xxxlll:text-[7.5rem] tv:text-[8rem]'>
            {text}
          </p>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <img
            className='object-cover h-[301px] xs:h-[392px] xl:h-[482px] xxl:h-[520px] xxxl:h-[720px] xxxll:h-[920px] xxxlll:h-[1120px]'
            src="https://res.cloudinary.com/dkjsqrzoa/image/upload/v1737644167/CoverImage1_owe4p6.jpg"
            alt="Cover"
          />
        </div>
      </div>

      <ListCardScroll items={items} />

      <svg height="10" width="100%" className='absolute bottom-0'>
        <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#333333] stroke-opacity-50 stroke-[20]' />
      </svg>
    </section>
  );
};

export default SectionCover;