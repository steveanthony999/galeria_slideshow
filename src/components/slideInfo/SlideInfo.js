import './SlideInfo.css';

const SlideInfo = ({ year, info }) => {
  return (
    <div className='SlideInfo'>
      <h5>{year}</h5>
      <p>{info}</p>
    </div>
  );
};

export default SlideInfo;
