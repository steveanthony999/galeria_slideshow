import React from 'react';
import { useParams } from 'react-router';
import BottomBar from '../components/bottomBar/BottomBar';
import SlideImage from '../components/slideImage/SlideImage';

import './Slide.css';

import data from '../data';
import SlideHeader from '../components/slideTitle/SlideHeader';

const Slide = () => {
  const { id } = useParams();

  return (
    <div className='Slide'>
      <h1>Slideshow {id}</h1>
      <p>{data[id - 1].year}</p>
      <SlideImage
        art={data[id - 1].images.gallery}
        alt={`${data[id - 1].name} Art`}
      />
      <SlideHeader
        title={data[id - 1].name}
        artist={data[id - 1].artist.name}
      />
      <BottomBar />
    </div>
  );
};

export default Slide;
