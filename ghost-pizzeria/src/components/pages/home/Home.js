import React from 'react';
import { menu } from '../../../data/Data';
import FilterItem from '../../filterItem/FilterItem';
import Login from '../login/Login';
import Register from '../register/Register';


const Home = () => {
  return (
    <div>
      <FilterItem list={menu}/>
      <Register />
    </div>
  );
};

export default Home;