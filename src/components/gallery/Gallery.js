import React from 'react';
import Masonry from 'react-masonry-css';

import './gallery.css';

import data from '../../data';

const Gallery = () => {
  return (
    <Masonry
      breakpointCols={4}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'>
      {data.map((i) => (
        <div key={i.id}>
          <img
            src={i.images.thumbnail}
            alt={i.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Gallery;
