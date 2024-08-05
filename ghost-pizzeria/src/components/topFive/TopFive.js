import React from 'react';
import { menu } from '../../data/Data';
import './TopFive.css'
import { Link } from 'react-router-dom';


const TopFive = ({}) => {

    const topFiveItems = menu.slice(0, 5) 
 
  return (
    <div className='principal-div-top-five'>
      <h2 className='h2-top-five'>Destaques</h2>
      <ul className='top-five-ul'>
        {topFiveItems.map((item, index) => (
        <Link to='/menu'>
          <li className='top-five-li' key={item.id}>
          <img className='top-five-img' src={item.image} alt={`image-${item.displayName}`} />
          <p><strong>{item.displayName}</strong></p>
          <p>R$ {item.price.toFixed(2)}</p>
          <p>Descrição: {item.description}</p>
          <p>Avaliação: {item.rate} </p>
          </li>
      </Link>
      ))}
      </ul>
    </div>
  );
};

export default TopFive;