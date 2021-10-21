import React from 'react';
import { useParams } from 'react-router';

const Slide = () => {
  const { id } = useParams();

  return (
    <div className='Slide'>
      <h1>Slideshow {id}</h1>
    </div>
  );
};

export default Slide;
