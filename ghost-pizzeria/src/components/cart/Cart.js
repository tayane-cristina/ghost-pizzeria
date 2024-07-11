import React from 'react';
import './Cart.css'
import { useState } from 'react';
import ReducerItens from '../reducerItens/ReducerItens';
import { menu } from '../../data/Data';

//Opção de desmarcar todos os itens
//Soma de todos os itens dentro do carrinho no aside

/*Produtos dentro do carrinho
- image
nome
preço
descrição
*/

const Cart = () => {

  return (
    <div className='cart-principal-div'>
      <div>
        <h2>Carrinho de compras</h2>
        <hr />

        <ReducerItens productsList={menu}/>
        
      </div>
    </div>
  );
};

export default Cart;