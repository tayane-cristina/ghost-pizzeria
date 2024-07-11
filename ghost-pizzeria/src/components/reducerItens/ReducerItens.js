import React from 'react';
import { useState, useReducer} from 'react';

const ReducerItens = ({productsList}) => {

    const [products, setProducts] = useState(["pêra", "uva", "maça"])

    const initialState = {
        products,
        cartProducts: []
    }

    const itensReducer = (state, action) => {
      switch (action.type){

        case "ADD":
          return {
            ...state,
            cartProducts: []
          }

        case "REMOVE":
          console.log("Você clicou no botão de remover do carrinho");

        case "INCREASE_QUANTITY":
          console.log("Você clicou no botão de aumentar a quantidade");
        
        case "DECREASE_QUANTITY":
          console.log("Você clicou no botão de diminuir a quantidade");

        default:
          return state

      };
    };

    const [state, dispatch] = useReducer(itensReducer, initialState);

    const handleToAddItens = (item) => {
      dispatch({type: "ADD"})
    };

    const handleToRemoveItens = (index) => {
      dispatch({type: "REMOVE"})
    };

    const handleToIncreaseItens = () => {
      dispatch({type: "INCREASE_QUANTITY"})
    };

    const handleToDeacreaseItens = () => {
      dispatch({type: "DECREASE_QUANTITY"})
    };

  return (
    <div>
      <h2>Buttons</h2>

    <ul>
      {products.map((item, index) => (
        <li key={index}>
          <p>Nome: {item}</p>
          <button onClick={() => handleToAddItens(item)}>button to add</button>
          <button onClick={() => handleToRemoveItens(index)}>button to remove</button>
          <button onClick={handleToIncreaseItens}>button to increase itens</button>
          <button onClick={handleToDeacreaseItens}>button to decrease itens</button>
        </li>
      ))}
  </ul>

      
      
    </div>
  );
};

export default ReducerItens;