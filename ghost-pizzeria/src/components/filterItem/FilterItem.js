import React from 'react';
import {useState} from 'react'
import CardsMenu from '../cardsMenu/CardsMenu';

const FilterItem = ({list}) => {

    const [itemFilter, setItemFilter] = useState("")

    const filteredItem = list.filter((item) => item.displayName.toLowerCase().includes(itemFilter.toLowerCase()))

  return (
    <div>
        <form className='headerPage-form'>
            <input 
            className='headerPage-input-search' 
            type='text' 
            placeholder='Procurar...'
            value={itemFilter}
            onChange={(e) => setItemFilter(e.target.value)}
            />
            <button className='headerPage-button-search' type='submit'>Buscar</button>
        </form>

        <CardsMenu list={filteredItem}/>
    </div>
  );
};

export default FilterItem;