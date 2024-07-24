import React from 'react';
import './Cart.css'

const Cart = ({cartItems}) => {

  return (
    <div className='cart-principal-div'>
      <div>
        <h2 className='cart-title'>Carrinho de compras</h2>
        <hr />

        <div className='infor-order'>
          <ul className='product-cart-ul'>
            {cartItems.length === 0 ? <p className='empty-cart'>Seu carrinho está vazio</p> : cartItems.map((item, index) => (
              <li className='product-cart-li' key={index}>
                <img className='product-cart-image' src={item.image} alt={`Imagem-de-${item.displayName}`} />
                <p className='product-cart-displayName'><strong>{item.displayName}</strong></p>
                <ul>{item.price.map((plate, i) => (
                  <li className='product-cart-li-price' key={i}>
                      <p>P: R${plate.P} </p>
                      <p>M: R${plate.M} </p>
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

          <div className='account'>
            <p>TOTAL</p>
            <span>R$ 0</span>
          </div>
        </div>
        

        
      </div>
    </div>
  );
};

export default Cart;