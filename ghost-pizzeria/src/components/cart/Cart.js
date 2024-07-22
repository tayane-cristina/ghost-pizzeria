import React from 'react';
import './Cart.css'

const Cart = ({cartItems}) => {

  return (
    <div className='cart-principal-div'>
      <div>
        <h2>Carrinho de compras</h2>
        <hr />

        <ul>
          {!cartItems ? <p>Seu carrinho está vazio</p> : cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={`Imagem-de-${item.displayName}`} />
              <p><strong>{item.displayName}</strong></p>
              <ul>{item.price.map((plate, i) => (
                <li className='cardsMenu-li-price' key={i}>
                    <p>P: R${plate.P} /</p>
                    <p>M: R${plate.M} /</p>
                    <p>G: R${plate.G}</p>
                </li>
            ))}</ul>
              <div className='amount-itens-in-cart'>
                <button className='decrease-quantity'>-</button>
                <span>1</span>
                <button className='increase-quantity'>+</button>
              </div>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Cart;