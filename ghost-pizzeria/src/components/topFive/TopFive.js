import React from 'react';
import { menu } from '../../data/Data';
import addAtCart from '../cardsMenu/CardsMenu'
import './TopFive.css'


const TopFive = () => {

    const topFiveItems = menu.slice(0, 5) 
 
  return (
    <div className='principal-div-top-five'>
      <h2 className='h2-top-five'>Top 5 favoritas</h2>
      <ul className='top-five-ul'>
        {topFiveItems.map((item, index) => (
        <li className='top-five-li' key={index}>
            <img className='top-five-img' src={item.image} alt={`image-${item.displayName}`} />
            <p><strong>{item.displayName}</strong></p>
            <p>R$ {item.price.toFixed(2)}</p>
            <p>Descrição: {item.description}</p>
            <p>Avaliação: {item.rate} </p>
            <button className='cardsMenu-button-addInCart' onClick={() => addAtCart(item)}>Adicionar ao carrinho</button>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default TopFive;