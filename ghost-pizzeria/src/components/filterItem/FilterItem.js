import React from 'react';
import {useState} from 'react'
import CardsMenu from '../cardsMenu/CardsMenu';

const FilterItem = ({list}) => {

    const [itemFilter, setItemFilter] = useState("")

    const filteredItem = list.filter((item) => item.displayName.toLowerCase().includes(itemFilter.toLowerCase()))

  return (
    <div className='principal-div-filterItem'>
      <h2 className='filterItem-h2'>Cardápio</h2>
      <form className='headerPage-form'>
          <input 
          className='headerPage-input-search' 
          type='text' 
          placeholder='Procurar...'
          value={itemFilter}
          onChange={(e) => setItemFilter(e.target.value)}
          />
      </form>
      <CardsMenu list={filteredItem}/>
    </div>
  );
};

export default FilterItem;