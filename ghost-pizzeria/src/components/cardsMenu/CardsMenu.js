import React from 'react';
import './CardsMenu.css'
import { useState } from 'react';
import Cart from '../cart/Cart';


const CardsMenu = ({list}) => {

  const [cart, setCart] = useState([])

  const addAtCart = (product) => {
    
    setCart((prevCart) => [...prevCart, product])
  }

  const removeItem = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: 0}: item))
  }

  const increaseItem = (id) => {
    setCart(cart.map(item => item.id === id ?  {...item, quantity: item.quantity + 1} : item))
  }

  const decreaseItem = (id) => {
    setCart(cart.map(item => item.id === id ?  {...item, quantity: item.quantity - 1} : item))
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
      <Cart cartItems={cart} removeItem={removeItem} increaseItem={increaseItem} decreaseItem={decreaseItem}/>
    </ul>
  );
};

export default CardsMenu;