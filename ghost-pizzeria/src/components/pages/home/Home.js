import React from 'react';
import { menu } from '../../../data/Data';
import FilterItem from '../../filterItem/FilterItem';


const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>  
      <FilterItem list={menu}/>
    </div>
  );
};

export default Home;