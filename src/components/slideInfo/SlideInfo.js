import './SlideInfo.css';

const SlideInfo = ({ year, info }) => {
  return (
    <div className='SlideInfo'>
      <div className='SlideInfo-container'>
        <h5 className='display light-grey'>{year}</h5>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default SlideInfo;
