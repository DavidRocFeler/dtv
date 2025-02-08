import React from 'react'
import ListCardSection from '@/components/ListCardSection'

const SeriesView: React.FC = () => {

  return (
    <div className='grid grid-cols-1 gap-y-[1rem] bg-gradient-to-r from-[#141414] to-black'>
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
      <ListCardSection section="Series" />
    </div>
  )
}

export default SeriesView;