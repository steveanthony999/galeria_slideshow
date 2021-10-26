import React from 'react';
import { useParams } from 'react-router';
import BottomBar from '../components/bottomBar/BottomBar';
import SlideImage from '../components/slideImage/SlideImage';

import './Slide.css';

import data from '../data';
import SlideHeader from '../components/slideTitle/SlideHeader';
import SlideInfo from '../components/slideInfo/SlideInfo';

const Slide = () => {
  const { id } = useParams();

  return (
    <div className='Slide'>
      <div className='Slide-container'>
        <SlideImage
          art={data[id - 1].images.gallery}
          alt={`${data[id - 1].name} Art`}
        />
        <div className='Slide-art-info'>
          <SlideHeader
            title={data[id - 1].name}
            artist={data[id - 1].artist.name}
          />
          <img
            src={data[id - 1].artist.image}
            alt={data[id - 1].artist.name}
            className='Slide-artist-image'
          />
        </div>
        <SlideInfo year={data[id - 1].year} info={data[id - 1].description} />
      </div>
      <BottomBar title={data[id - 1].name} artist={data[id - 1].artist.name} />
    </div>
  );
};

export default Slide;
