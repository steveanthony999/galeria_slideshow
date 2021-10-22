import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './slideshowBar.css';

const SlideshowBar = () => {
  const [slides, setSlides] = useState(false);

  const toggleSlideshow = () => {
    setSlides((slides) => !slides);
  };

  return (
    <header className='SlideshowBar'>
      <Link className='heading-two black' to='/'>
        galleria.
      </Link>
      {/* <Link className='SlideshowBar-start link-one dark-grey' to='/1'> */}
      <div
        className='SlideshowBar-toggle link-one dark-grey'
        onClick={toggleSlideshow}>
        {!slides ? 'START SLIDESHOW' : 'STOP SLIDESHOW'}
      </div>
      {/* </Link> */}
    </header>
  );
};

export default SlideshowBar;
