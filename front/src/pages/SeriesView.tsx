import React from 'react'
import ListCardSection from '@/components/ListCardSection'

const SeriesView: React.FC = () => {

  return (
    <div className='grid grid-cols-1 gap-y-[1rem]'>
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
      <svg height="10" width="100%" className='mt-[3rem]'>
        <line x1="0" y1="0" x2="100%" y2="0" className='stroke-[#0C1A62] stroke-opacity-50 stroke-[5]' />
      </svg>
    </div>
  )
}

export default SeriesView;