import React from 'react';
import { useEffect } from 'react';
import './CardsMenu.css'
import { useState } from 'react';
import Cart from '../cart/Cart';


const CardsMenu = ({list}) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const updateTotal = () => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  useEffect(() => {
    updateTotal();
  }, [cart]);

  //FUNCTION TO ADD PRODUCTS IN CART
  const addAtCart = (product) => {
    
  const itemIndex = cart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
    increaseItem(product.id);
    } else {
    setCart([...cart, product]);
    }
  }

  //FUNCTION TO REMOVE PRODUCTS OF THE CART
  const removeItem = (id) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: 0}: item))
  }

  //FUNCTION TO INCREASE PRODUCTS ALREADY IN THE CART
  const increaseItem = (itemId) => {
    setCart(cart.map(item => item.id === itemId.id ?  {...item, quantity: item.quantity + 1} : item))
  }

  //FUNCTION TO DECREASE PRODUCTS ALREADY IN CART
  const decreaseItem = (itemId) => {
    setCart(cart.map(item => item.id === itemId.id ?  {...item, quantity: item.quantity - 1} : item))
  }

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
      <Cart cartItems={cart} removeItem={removeItem} increaseItem={increaseItem} decreaseItem={decreaseItem} total={total}/>
    </ul>
  );
};

export default CardsMenu;