import { useContext, useEffect } from 'react';
import { Context } from '../../Store';
import './GalleryModal.css';

const GalleryModal = ({ art }) => {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className='GalleryModal' onClick={() => setState(false)}>
      <div className='GalleryModal-container'>
        <p className='link-two white'>CLOSE</p>
        <img src={art} alt='art' />
      </div>
    </div>
  );
};

export default GalleryModal;
