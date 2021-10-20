import React from 'react';
import Masonry from 'react-masonry-css';

import './gallery.css';

import data from '../../data';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  900: 2,
  567: 1,
};

const Gallery = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'>
      {data.map((i) => (
        <div key={i.id}>
          <img
            src={i.images.thumbnail}
            alt={i.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
          <div className='bottom-fade'></div>
          <div className='art-info'>
            <h3 className='white heading-two'>{i.name}</h3>
            <p className='white subhead-two'>{i.artist.name}</p>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
