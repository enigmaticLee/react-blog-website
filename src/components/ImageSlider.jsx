import React, {useState} from 'react'
import {SliderData}  from './SliderData'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length-1 ? 0 : current +1)
  }
  //console.log(current)
  const prevSlide = () => {
    setCurrent(current === 0 ? length-1 : current -1)
  }
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className='relative flex justify-center items-center'>
      <FaArrowAltCircleRight className='absolute inset-y-1/2 right-0.5 text-black cursor-pointer z-10 text-4xl' onClick={nextSlide}/>
      <FaArrowAltCircleLeft className='absolute inset-y-1/2 left-0.5 text-black cursor-pointer z-10 text-4xl' onClick={prevSlide}/>
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <img src={slide.image} alt="taipei circulation image" className='w-full size-96 cursor-pointer relative'/>
            )}
            
          </div>
        )
      })}
    
      
    </div>
  )
}

export default ImageSlider