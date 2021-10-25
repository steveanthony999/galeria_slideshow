import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './slideshowBar.css';

const SlideshowBar = ({ saveSlideState }) => {
  const [slides, setSlides] = useState(false);

  useEffect(() => {
    saveSlideState(slides);
  });

  const toggleSlideshow = () => {
    setSlides((slides) => !slides);
  };

  return (
    <header className='SlideshowBar'>
      <Link className='heading-two black' to='/'>
        galleria.
      </Link>
      <div
        className='SlideshowBar-toggle link-one dark-grey'
        onClick={toggleSlideshow}>
        {!slides ? 'START SLIDESHOW' : 'STOP SLIDESHOW'}
      </div>
    </header>
  );
};

export default SlideshowBar;
