import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import BackButton from '../../assets/shared/icon-back-button.svg';
import NextButton from '../../assets/shared/icon-next-button.svg';
import ProgressBar from '../progressBar/ProgressBar';

import './BottomBar.css';

const BottomBar = ({ title, artist }) => {
  const [backNext, setBackNext] = useState({
    back: false,
    next: true,
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (parseInt(id) === 1) {
      setBackNext((backNext) => ({ ...backNext, back: false, next: true }));
    } else if (parseInt(id) === 2) {
      setBackNext((backNext) => ({ ...backNext, back: true, next: true }));
    } else if (parseInt(id) === 16) {
      setBackNext((backNext) => ({ ...backNext, back: true, next: false }));
    } else {
      setBackNext((backNext) => ({ ...backNext, back: true, next: true }));
    }
  }, [id]);

  const changeSlideBack = () => {
    if (parseInt(id) === 12) {
      history.push(`/${parseInt(id) - 2}`);
    } else {
      history.push(`/${parseInt(id) - 1}`);
    }
  };

  const changeSlideNext = () => {
    if (parseInt(id) === 10) {
      history.push(`/${parseInt(id) + 2}`);
    } else if (parseInt(id) === 16) {
      history.push(`/1`);
    } else {
      history.push(`/${parseInt(id) + 1}`);
    }
  };

  return (
    <div className='BottomBar'>
      <div className='BottomBar-info'>
        <h3 className='heading-three'>{title}</h3>
        <p className='subhead-two fw-reg'>{artist}</p>
      </div>
      <div className='BottomBar-nav'>
        <img
          src={BackButton}
          alt='back-button'
          className={backNext.back === false ? 'inactive' : null}
          onClick={backNext.back ? changeSlideBack : undefined}
        />
        <img
          src={NextButton}
          alt='next-button'
          className={backNext.next === false ? 'inactive' : null}
          onClick={backNext.next ? changeSlideNext : undefined}
        />
      </div>
      <ProgressBar id={id} />
    </div>
  );
};

export default BottomBar;
