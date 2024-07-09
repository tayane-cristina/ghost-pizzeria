import React from 'react';
import { menu } from '../../../data/Data';
import FilterItem from '../../filterItem/FilterItem';
import Login from '../login/Login';
import Register from '../register/Register';
import Cart from '../../cart/Cart';


const Home = () => {
  return (
    <div>
      <FilterItem list={menu}/>
      
    </div>
  );
};

export default Home;