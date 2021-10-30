import ViewIcon from '../../assets/shared/icon-view-image.svg';
import './SlideImage.css';

const SlideImage = ({ art, alt }) => {
  return (
    <div className='SlideImage'>
      <img src={art} alt={alt} />
      <div className='SlideImage-view-link'>
        <img src={ViewIcon} alt='icon' />
        <p className='link-two white'>VIEW IMAGE</p>
      </div>
    </div>
  );
};

export default SlideImage;
