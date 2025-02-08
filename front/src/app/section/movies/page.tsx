import ProtectedRoute from '@/app/ProtectedRoute';
import MoviesView from '@/pages/MoviesView';
import React from 'react'

const Movie: React.FC = () => {
  return (
    <div>
      <ProtectedRoute>
        <MoviesView/>
      </ProtectedRoute>
    </div>
  )
}

export default Movie;