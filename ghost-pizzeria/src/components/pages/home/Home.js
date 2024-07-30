import React from 'react';
import TopFive from '../../topFive/TopFive';
import Events from '../../events/Events';
import './Home.css'

const Home = () => {
  return (
    <div className='principal-div-home'>
     <TopFive />
     <Events />
      
    </div>
  );
};

export default Home;