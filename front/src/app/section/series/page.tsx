import ProtectedRoute from '@/app/ProtectedRoute';
import SeriesView from '@/pages/SeriesView';
import React from 'react'

const Series: React.FC = () => {
  return (
    <div>
      <ProtectedRoute>
        <SeriesView/>
      </ProtectedRoute>
    </div>
  )
}

export default Series;