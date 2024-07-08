import React from 'react';
import { useState, useReducer } from 'react';
import './HandleItens'

const HandleItens = () => {
    
  const [listItens, setListItens] = useState([]);

    console.log("funcionou")


  return (
    <div>
      {!listItens ? <p><strong>Seu carrinho está vazio</strong></p> : 
      listItens.map((item) => <p>{item.displayName}</p>) }
    </div>
  );
};

export default HandleItens;