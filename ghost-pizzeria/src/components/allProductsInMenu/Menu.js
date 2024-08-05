import React from 'react';
import FilterItem from '../filterItem/FilterItem';
import { menu } from '../../data/Data';
import Cart from '../cart/Cart';

const Menu = () => {
  return (
    <div>
       <FilterItem list={menu}/>
       <Cart />
    </div>
  );
};

export default Menu;