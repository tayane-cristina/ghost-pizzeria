import React from 'react';
import './Local.css'

const Local = () => {
  return (
    <div className='principal-div-local'>
        <h2 className='local-h2'>Onde nos encontar</h2>
        <p className='local-p'>Nossos restaurantes ficam localizados nas mais belas cidades do Rio de Janeiro, com fácil acesso, e estacionamento para clientes, venha e traga sua família e amigos, ficaremos muito felizes em recebê-los!</p>

        <div className='local-units'>
            <div className='unit'>
                <img className='unit-local-restaurant-img' src='https://images.pexels.com/photos/10051161/pexels-photo-10051161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='image-restaurant'></img>
                <p className='unit-title'>Barra da Tijuca</p>
            </div>

            <div className='unit'>
                <img className='unit-local-restaurant-img' src='https://images.pexels.com/photos/16520257/pexels-photo-16520257/free-photo-of-restaurante-rua-via-mesa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='image-restaurant'></img>
                <p className='unit-title'>São cristovão</p>
            </div>

            <div className='unit'>
                <img className='unit-local-restaurant-img' src='https://images.pexels.com/photos/12365466/pexels-photo-12365466.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='image-restaurant'></img>
                <p className='unit-title'>Méier</p>
            </div>
        </div>
      
    </div>
  );
};

export default Local;