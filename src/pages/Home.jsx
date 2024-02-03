import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'
import Profolio from './Profolio'

const Home = () => {
  return (
    <div>
      <Banner/>

      <div className='max-w-7xl mx-auto'>
        <Profolio/>
        
      </div>
    </div>
  )
}

export default Home