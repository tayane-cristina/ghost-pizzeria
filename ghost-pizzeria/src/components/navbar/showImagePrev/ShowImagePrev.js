import React from 'react';
import './ShowImagePrev.css'

const ShowImagePrev = () => {
  return (
    <div className='principal-div-img-prev'>
      <img className='img-prev' src='https://images.pexels.com/photos/24182555/pexels-photo-24182555/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image-restaurante-pizza'></img>
      <img className='img-prev' src='https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image-restaurante-pizza'></img>
      <img className='img-prev' src='https://images.pexels.com/photos/24182556/pexels-photo-24182556/free-photo-of-comida-alimento-refeicao-italiano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image-restaurante-pizza'></img>
    </div>
  );
};

export default ShowImagePrev;