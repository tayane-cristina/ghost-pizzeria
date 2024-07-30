import React from 'react';
import FilterItem from '../filterItem/FilterItem';
import { menu } from '../../data/Data';

const Menu = () => {
  return (
    <div>
       <FilterItem list={menu}/>
    </div>
  );
};

export default Menu;