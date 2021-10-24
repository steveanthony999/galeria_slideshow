import './SlideImage.css';

const SlideImage = ({ art, alt }) => {
  return (
    <div className='SlideImage'>
      <img src={art} alt={alt} />
    </div>
  );
};

export default SlideImage;
