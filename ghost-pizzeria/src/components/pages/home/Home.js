import React from 'react';
import TopFive from '../../topFive/TopFive';
import Events from '../../events/Events';
import './Home.css'
import Menu from '../../allProductsInMenu/Menu';
import filteredItem from '../../filterItem/FilterItem';
import PreviewEvents from '../../previewEvents/PreviewEvents';
import Local from '../../local/Local';
import Cart from '../../cart/Cart';

const Home = () => {
  return (
    <div className='principal-div-home'>
     <TopFive />
     <PreviewEvents />
     <Local />
    
     
    </div>
  );
};

export default Home;