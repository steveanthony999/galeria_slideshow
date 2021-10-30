import { useContext } from 'react';
import { Context } from '../../Store';
import './GalleryModal.css';

const GalleryModal = () => {
  const [state, setState] = useContext(Context);

  return (
    <div className='GalleryModal' onClick={() => setState(false)}>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
};

export default GalleryModal;
