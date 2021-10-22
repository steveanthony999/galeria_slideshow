import React from 'react';
import { useParams } from 'react-router';

import data from '../data';

const Slide = () => {
  const { id } = useParams();

  return (
    <div className='Slide'>
      <h1>Slideshow {id}</h1>
      <p>{data[id - 1].year}</p>
      <img src={data[id - 1].images.thumbnail} alt='' />
    </div>
  );
};

export default Slide;
