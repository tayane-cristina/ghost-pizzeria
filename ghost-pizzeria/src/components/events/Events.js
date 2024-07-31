import './Events.css'
import AllYouCanEat from './allYouCanEat/AllYouCanEat';
import CrazyTuesday from './crazyTuesday/CrazyTuesday'
import Party from './party/Party'

const Events = () => {
  return (
    <div className='div-principal-events'>
        <h2 className='h2-events'>Eventos</h2>
        <p className='events-text'>Seja bem-vindo(a), será uma grande gratificação para nossa equipe recebelo em nossos restaurantes, confira os eventos que temos disponíveis durante o mês.
          ficaremos felizes em recebe-lo(a), e fazer o seu dia mais especial!
        </p>

        <div className='events-calendar'>
          <AllYouCanEat />
          <CrazyTuesday />
          <Party />
        </div>
    </div>
  );
};

export default Events;