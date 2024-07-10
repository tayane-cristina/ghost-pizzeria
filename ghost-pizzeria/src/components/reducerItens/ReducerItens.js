import React from 'react';
import { useState } from 'react';

const ReducerItens = ({productsList}) => {

    const [products, setProducts] = useState([productsList])

    const initialState = {
        products,
        cartProducts: []
    }

  return (
    <div>
      
    </div>
  );
};

export default ReducerItens;