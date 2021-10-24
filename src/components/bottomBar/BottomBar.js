import BackButton from '../../assets/shared/icon-back-button.svg';
import NextButton from '../../assets/shared/icon-next-button.svg';

import './BottomBar.css';

const BottomBar = () => {
  const changeSlide = () => {
    console.log('Window.location');
  };

  return (
    <div className='BottomBar'>
      <div className='BottomBar-info'>
        <h3 className='heading-three'>Artwork Title</h3>
        <p className='subhead-two fw-reg'>Artist Name</p>
      </div>
      <div className='BottomBar-nav'>
        <img
          src={BackButton}
          alt='back-button'
          className='inactive'
          onClick={changeSlide}
        />
        <img src={NextButton} alt='next-button' onClick={changeSlide} />
      </div>
    </div>
  );
};

export default BottomBar;
