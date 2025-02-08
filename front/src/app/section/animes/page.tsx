import ProtectedRoute from '@/app/ProtectedRoute';
import AnimesView from '@/pages/AnimesView'
import React from 'react'

const Animes: React.FC = () => {
  return (
    <div>
        <ProtectedRoute>
          <AnimesView/>
        </ProtectedRoute>
    </div>
  )
}

export default Animes;