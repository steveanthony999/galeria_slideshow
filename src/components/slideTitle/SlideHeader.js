import './SlideHeader.css';

const SlideHeader = ({ title, artist }) => {
  return (
    <div className='SlideHeader'>
      <h2>{title}</h2>
      <h4>{artist}</h4>
    </div>
  );
};

export default SlideHeader;
