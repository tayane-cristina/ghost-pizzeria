/*
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
            cartProducts: [...products, action.item]
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
      dispatch({type: "ADD", item})
    };

    const handleToRemoveItens = (index) => {
      dispatch({type: "REMOVE"})
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
        </li>
      ))}
  </ul>

  <ul>
    {cartProducts.map((item) => <p>{item}</p>)}
  </ul>

      
      
    </div>
  );
};

export default ReducerItens;

*/