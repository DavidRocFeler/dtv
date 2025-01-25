import React from 'react'
import ListCardSection from '@/components/ListCardSection'

const SeriesView: React.FC = () => {

  return (
    <div className='grid grid-cols-1 gap-y-[1rem]'>
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
    </div>
  )
}

export default SeriesView;