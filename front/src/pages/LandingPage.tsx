import React from 'react';
import SectionCover from '@/components/SectionCover';
import { coverTextArray } from '@/helpers/TextCover.helpers';
import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import { IMovieDataProps } from '@/interface/globalTypes';

const LandingPage: React.FC = () => {
  const chunks: IMovieDataProps[][] = [];

  const chunkSize = 10; 
  for (let i = 0; i < movieDataHelpers.length; i += chunkSize) {
    chunks.push(movieDataHelpers.slice(i, i + chunkSize));
  }

  return (
    <div className='pt-[3rem]'>
      {coverTextArray.map((item, index) => (
        <SectionCover
          key={item.id}
          id={item.id}
          text={item.text}
          items={chunks[index]} 
        />
      ))}
    </div>
  );
};

export default LandingPage;