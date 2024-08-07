import React from 'react';
import FilterItem from '../filterItem/FilterItem';
import { menu } from '../../data/Data';
import Cart from '../cart/Cart';

const Menu = () => {
  return (
    <div>
      <h2>Menu</h2>
       <FilterItem list={menu}/>
       <Cart />
    </div>
  );
};

export default Menu;