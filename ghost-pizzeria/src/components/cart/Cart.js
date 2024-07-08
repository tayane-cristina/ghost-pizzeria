import React from 'react';
import './Cart.css'
import { useState } from 'react';

const Cart = () => {

    const [cartList, setCartList] = useState([])

    const emptyCart = () => {
        <div>
            <p><strong>Seu Carrinho está vazio</strong></p>
            <img className='cart-emppty' src='https://img.icons8.com/?size=80&id=40LTSjteI583&format=png' alt='imagem-carrinho-vazio'/>
        </div>
    };

  return (
    <div>
      {!cartList ? emptyCart : 
      <ul>
        {cartList.map((item, index) => (
            <li key={index}>
                <p>{item.displayName}</p>
            </li>
        ))}
    </ul>}
    </div>
  );
};

export default Cart;