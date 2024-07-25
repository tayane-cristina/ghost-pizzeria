import React from 'react';
import './CardsMenu.css'
import { useState } from 'react';
import Cart from '../cart/Cart';


const CardsMenu = ({list}) => {

  const [cart, setCart] = useState([])

  const addAtCart = (product) => {
    
    setCart([...cart, product])
    
  }

  console.log(cart)

  return (
    <ul className='cardsMenu-ul'>
      {list.map((item, index) => (
        <li className='cardsMenu-li' key={index}>
            <img className='cardsMenu-img' src={item.image} alt={`image-${item.displayName}`} />
            <p><strong>{item.displayName}</strong></p>
            <p>R$ {item.price.toFixed(2)}</p>
            <p>Descrição: {item.description}</p>
            <p>Avaliação: {item.rate} </p>
            <button className='cardsMenu-button-addInCart' onClick={() => addAtCart(item)}>Adicionar ao carrinho</button>
        </li>
      ))}
      <Cart cartItems={cart} />
    </ul>
  );
};

export default CardsMenu;