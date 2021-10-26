import { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ id }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(id * 6.24);
  }, [id]);

  return (
    <div className='ProgressBar' style={{ width: `${percentage}%` }}></div>
  );
};

export default ProgressBar;
