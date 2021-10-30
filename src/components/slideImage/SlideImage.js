import { useContext } from 'react';
import ViewIcon from '../../assets/shared/icon-view-image.svg';
import { Context } from '../../Store';
import './SlideImage.css';

const SlideImage = ({ art, alt }) => {
  const [state, setState] = useContext(Context);

  return (
    <div className='SlideImage'>
      <img src={art} alt={alt} />
      <div className='SlideImage-view-link' onClick={() => setState(true)}>
        <img src={ViewIcon} alt='icon' />
        <p className='link-two white'>VIEW IMAGE</p>
      </div>
    </div>
  );
};

export default SlideImage;
