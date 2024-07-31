import React from 'react';
import TopFive from '../../topFive/TopFive';
import Events from '../../events/Events';
import './Home.css'
import Menu from '../../allProductsInMenu/Menu';

const Home = () => {
  return (
    <div className='principal-div-home'>
     {/* 
     <TopFive />
     <Events />
     */}

     <Menu />

      
    </div>
  );
};

export default Home;