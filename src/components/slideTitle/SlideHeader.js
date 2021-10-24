import './SlideHeader.css';

const SlideHeader = ({ title, artist }) => {
  return (
    <div className='SlideHeader'>
      <h2 className='heading-one'>{title}</h2>
      <h4 className='subhead-one'>{artist}</h4>
    </div>
  );
};

export default SlideHeader;
