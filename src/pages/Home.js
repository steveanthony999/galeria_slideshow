import React from 'react';
import SlideshowBar from '../components/slideshowBar/SlideshowBar';

import data from '../data';

const Home = () => {
  return (
    <div>
      <SlideshowBar />
      <hr />
      {data.map((i) => (
        <div key={i.id}>
          <img src={i.images.thumbnail} alt={i.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
