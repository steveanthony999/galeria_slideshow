import BackButton from '../../assets/shared/icon-back-button.svg';
import NextButton from '../../assets/shared/icon-next-button.svg';

import './BottomBar.css';

const BottomBar = () => {
  return (
    <div className='BottomBar'>
      <h1>Bottom Bar</h1>
      <img src={BackButton} alt='back-button' />
      <img src={NextButton} alt='next-button' />
    </div>
  );
};

export default BottomBar;
