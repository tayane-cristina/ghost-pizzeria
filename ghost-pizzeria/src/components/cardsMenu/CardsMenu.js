import React from 'react';
import { useEffect } from 'react';
import './CardsMenu.css'
import { useState } from 'react';
import Cart from '../cart/Cart';


const CardsMenu = ({list}) => {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  const orderClosed = () => {
    console.log("funcionou")
    alert("Obrigada por realizar o seu pedido na Ghost Pizzaria! Infelizmente seu pedido não será entregue, pois assim como a empresa, os produtos também são fastasma. Espero que tenha tido uma boa experiência de navegação pelo site, e que volte mais vezes, obrigado pela sua companhia. Atenciosamente.")
    setCart([])
  }

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
    setCart(cart.filter(item => item.id !== id));
  };

  //FUNCTION TO INCREASE PRODUCTS ALREADY IN THE CART
  const increaseItem = (itemId) => {
    setCart(cart.map(item => item.id === itemId ?  {...item, quantity: item.quantity + 1} : item))
  };

  //FUNCTION TO DECREASE PRODUCTS ALREADY IN CART
  const decreaseItem = (itemId) => {
    setCart(cart => cart.reduce((acc, item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, []));
  };

  return (
    <div className='principal-div-cardsMenu'>
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
      </ul>
      <Cart cartItems={cart} removeItem={removeItem} increaseItem={increaseItem} decreaseItem={decreaseItem} total={total} orderClosed={orderClosed}/>
    </div>
  );
};

export default CardsMenu;