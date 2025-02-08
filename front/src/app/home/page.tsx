import { HomeView } from '@/pages/HomeView';
import React from 'react'
import ProtectedRoute from '../ProtectedRoute';

const Home: React.FC = () => {
  return (
    <div>
      <ProtectedRoute>
        <HomeView/>
      </ProtectedRoute>
 
    </div>
  )
}

export default Home;