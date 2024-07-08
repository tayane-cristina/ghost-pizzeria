import React from 'react';
import './CardsMenu.css'

const CardsMenu = ({list}) => {
  return (
    <ul className='cardsMenu-ul'>
      {list.map((item, index) => (
        <li className='cardsMenu-li' key={index}>
            <img className='cardsMenu-img' src={item.image} alt={`image-${item.displayName}`} />
            <p><strong>{item.displayName}</strong></p>
            <ul>{item.price.map((plate, i) => (
                <li className='cardsMenu-li-price' key={i}>
                    <p>P: R${plate.P} /</p>
                    <p>M: R${plate.M} /</p>
                    <p>G: R${plate.G}</p>
                </li>
            ))}</ul>
            <p>Descrição: {item.description}</p>
            <p>Avaliação: {item.rate} </p>
            <button className='cardsMenu-button-addInCart'>Adicionar ao carrinho</button>
        </li>
      ))}
    </ul>
  );
};

export default CardsMenu;