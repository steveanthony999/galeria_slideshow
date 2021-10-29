import './SlideInfo.css';

const SlideInfo = ({ year, info, source }) => {
  return (
    <div className='SlideInfo'>
      <div className='SlideInfo-container'>
        <h5 className='display light-grey'>{year}</h5>
        <p className='dark-grey'>{info}</p>
        <a href={source} className='dark-grey' target='_blank' rel='noreferrer'>
          GO TO SOURCE
        </a>
      </div>
    </div>
  );
};

export default SlideInfo;
