import { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './slideshowBar.css';

const SlideshowBar = () => {
  const [slides, setSlides] = useState(false);
  const [count, setCount] = useState(1);

  const history = useHistory();

  useEffect(() => {
    if (slides === true) {
      history.push(`/${count}`);

      const timer = window.setInterval(() => {
        if (count === 10) {
          setCount((prevCount) => prevCount + 2);
        } else if (count === 16) {
          setCount(1);
        } else {
          setCount((prevCount) => prevCount + 1);
        }
      }, 5000);
      return () => {
        window.clearInterval(timer);
      };
    }
  }, [slides, count, history]);

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
