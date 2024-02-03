import React from 'react'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/SliderData'



const Profolio = () => {
  

  return (
    <div>
      <div className='py-20 bg-white  text-black px-4 mx-20 mt-10'>
        <h1 className='text-3xl lg:text-4xl leading-snug font-slim mb-5'>TAIPEI CIRCULATION</h1>
        <h2 className='ml-2'>Profolio</h2>
      </div>
      <div className='mx-20 px-4 justify-center mb-20'>
          <ImageSlider className="items-center" slides={SliderData}/>
          
      </div>    
      
    </div>
    
  )
}

export default Profolio