import React from 'react';
import { Link } from 'react-router-dom';
import './slideshowBar.css';

const SlideshowBar = () => {
  return (
    <header className='SlideshowBar'>
      <Link className='heading-two black' to='/'>
        galleria.
      </Link>
      <Link className='SlideshowBar-start link-one dark-grey' to='/1'>
        START SLIDESHOW
      </Link>
    </header>
  );
};

export default SlideshowBar;
