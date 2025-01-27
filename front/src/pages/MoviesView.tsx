import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import React from 'react'
import ListCardSection from '@/components/ListCardSection';

const MoviesView: React.FC = () => {

  return (
    <div className='grid grid-cols-1 gap-y-[1rem]'>
      <ListCardSection section="Animes" />
      <ListCardSection section="Movies" />
      <ListCardSection section="Movies" />
      <svg height="10" width="100%" className='mt-[3rem]'>
        <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#0C1A62] stroke-opacity-50 stroke-[5]' />
      </svg>
    </div>
  )
}

export default MoviesView;