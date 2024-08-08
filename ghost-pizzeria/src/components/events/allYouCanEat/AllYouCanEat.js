import React from 'react';
import './AllYouCanEat.css'

const AllYouCanEat = () => {
  return (
    <div className='principal-div-all-you-can-eat'>
      <h2 className='all-you-can-eat-h2'>Rodízio</h2>
      <img className='all-you-can-eat-img' src='https://images.pexels.com/photos/1788852/pexels-photo-1788852.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image-pizza'></img>

      <div className='all-you-can-eat-infor card-event'>
        <p>Venha saborear uma variedade irresistível de pizzas, refil liberado, sabores tradicionais até as criações exclusivas do nosso chef. 
          Será uma noite de muita alegria, boa comida e excelente companhia!</p>
        <p><strong>Dias:</strong> Seg, Ter, Qua, Qui, Sex, Sáb, Dom</p>
        <p><strong>Horários:</strong>De segunda a quinta das 13:00 às 22:00 e de sexta a domingo das 16:00 às 02:00</p>
        <p><strong>Preço:</strong> De segunda a sexta R$39,90 - de sábado à domingo 49,90</p>
      </div>
      <hr></hr>
    </div>

  );
};

export default AllYouCanEat;