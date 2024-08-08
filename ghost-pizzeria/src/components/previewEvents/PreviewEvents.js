import React from 'react';
import './PreviewEvents.css'
import {Link} from 'react-router-dom'

const PreviewEvents = () => {
  return (
    <div className='principal-div-preview-events'>
        <h2 className='events-h2'>Participe dos nossos eventos</h2>
        <div className='events-preview-events'>
          <div className='event'>
              <img src='https://images.pexels.com/photos/1788852/pexels-photo-1788852.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image-rodizio' className='img-preview-event'/>
              <p className='title-event'><strong>Rodízio</strong></p>
              <p className='text-about-event'>Você é nosso(a) convidado(a) para uma noite deliciosa de rodízio! Venha saborear uma variedade incrível de pratos e desfrutar de momentos agradáveis em boa companhia.</p>
              <Link to="/events" className='link-knowMore'>Saber mais...</Link>
          </div>
          <div className='event'>
              <img src='https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image-restaurante' className='img-preview-event'/>
              <p className='title-event'><strong>Terça Maluca</strong></p>
              <p className='text-about-event'>Prepare-se para uma noite divertida e cheia de sabores irresistíveis! Venha aproveitar ofertas especiais e muita pizza deliciosa.</p>
              <Link to="/events" className='link-knowMore' >Saber mais...</Link>
          </div>
          <div className='event'>
              <img src='https://images.pexels.com/photos/3534022/pexels-photo-3534022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image-party' className='img-preview-event'/>
              <p className='title-event'><strong>Faça sua festa</strong></p>
              <p className='text-about-event'>Transforme sua festa em uma experiência deliciosa e divertida! Reserve nossa pizzaria para seu evento e desfrute de uma festa personalizada com pizzas irresistíveis e um ambiente acolhedor.</p>
              <Link to="/events" className='link-knowMore' >Saber mais...</Link>
          </div>
        </div>
    </div>
  );
};

export default PreviewEvents;