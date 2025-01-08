import React from 'react';
import background_image from '../assets/city-skyline-with-residential-district.jpg';

const Homepage = () => {
  return (
    <>
    <div>
      <img src={background_image} alt='Nairobi city' className='bg-cover object-cover'/>
    </div>
    </>
  )
}

export default Homepage
