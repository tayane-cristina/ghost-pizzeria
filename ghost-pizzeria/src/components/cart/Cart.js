import React from 'react';
import './Cart.css'
import { useState } from 'react';

//Opção de desmarcar todos os itens
//Soma de todos os itens dentro do carrinho no aside

/*Produtos dentro do carrinho
- image
nome
preço
descrição
*/

const Cart = () => {

    const [cartList, setCartList] = useState([
      {  id: 13,
        displayName: "Alho e Óleo", 
        rate: 3.5,
        description: "alho, óleo, mussarela",
        price: [
          {P: 20,
           M: 35,
           G: 50,   
          }
        ],
        isGourmet: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHDoBkPOw2-S3gTzkCZwIJhqHLpTdRRXpmA&s",
      },
      {  id: 14,
        displayName: "Palmito", 
        rate: 3.5,
        description: "palmito, mussarela",
        price: [
          {P: 20,
           M: 35,
           G: 50,   
          }
        ],
        isGourmet: false,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vvZtObGZ-SoWd7eu6G8nYUpBbb-_chWW-Q&s",
      },
    ])

    const [totalPrice, setTotalPrice] = useState(0)

    const emptyCart = () => {
        <div>
            <p><strong>Seu Carrinho está vazio</strong></p>
            <img className='cart-emppty' src='https://img.icons8.com/?size=80&id=40LTSjteI583&format=png' alt='imagem-carrinho-vazio'/>
        </div>
    };

    if (cartList.length <= 0) {
      console.log("não tem nada dentro da lista")
    } else {
      console.log("Tem algo dentro da lista")
    }

  return (
    <div className='cart-principal-div'>
      <div>
        <h2>Carrinho de compras</h2>
      </div>

      <div className='cart-totalPrice'>
        <p><strong>Preço Total - R$ {totalPrice.toFixed(2)}</strong></p>
        <button className='cart-btn-buy'>Finalizar a compra</button>
      </div>

      {cartList.length <= 0 ? <p><strong>Seu carrinho está vazio</strong></p> : 
      <ul className='cart-ul'>
        {cartList.map((item, index) => (
            <li key={index} className='cart-li'>
                <img className='cart-img' src={item.image} alt={`image-${item.displayName}`}></img>
                <section className='cart-infor'>
                  <p><strong>{item.displayName}</strong></p>
                  <p>{item.description}</p>
                  
                  <p>Selecione o tamanho</p>
                  <form className='cart-form-option'>
                    <input type="radio" id="TAM-P" name="TAM" value="P"></input>
                    <label for="TAM-P">Pequena - R$20,00 | </label><br></br>
                    <input type="radio" id="TAM-M" name="TAM" value="M"></input>
                    <label for="TAM-M">Média - R$35,00 | </label><br></br>
                    <input type="radio" id="TAM-G" name="TAM" value="G"></input>
                    <label for="TAM-G">Grande - R$50,00</label><br></br>
                  </form>
                </section>       
            </li>
        ))}
    </ul>}
    </div>
  );
};

export default Cart;