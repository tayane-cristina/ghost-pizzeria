import React from 'react';
import './CrazyTuesday.css'

const CrazyTuesday = () => {
  return (
    <div className='principal-div-crazyTuesday'>
      <h2 className='crazy-tuesday-h2'>Terça Maluca</h2>
      <img className="crazy-tuesday-img" src='https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image-letreiro'></img>

      <ul className='crazy-tuesday-infor'>
        <li><strong>Pizza em Dobro:</strong> Na compra de qualquer pizza grande, leve outra de igual ou menor valor grátis!</li>
        <li><strong>Bebidas pela Metade do Preço:</strong>Todas as bebidas, incluindo refrigerantes, sucos e chopp, com 50% de desconto!</li>
        <li><strong>Pizza Surpresa do Chef:</strong>Experimente uma criação exclusiva do nosso chef, disponível apenas nas Terças Malucas!</li>
        <li><strong> Sorteio de Brindes:</strong>Participe do nosso sorteio e concorra a brindes especiais, como vale-pizza e acessórios exclusivos da Ghost Pizzaria.</li>
        <li><strong>Música ao Vivo:</strong>Curta uma noite animada com música ao vivo para tornar sua experiência ainda mais especial.</li>
      </ul>
    </div>
  );
};

export default CrazyTuesday;