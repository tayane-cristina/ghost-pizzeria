import './Events.css'
import AllYouCanEat from './allYouCanEat/AllYouCanEat';
import CrazyTuesday from './crazyTuesday/CrazyTuesday'
import Party from './party/Party'

const Events = () => {
  return (
    <div className='div-principal-events'>
        <h2 className='h2-events'>Participe dos nossos eventos! </h2>
        <p className='events-text'>
        Nós acreditamos que a pizza vai muito além de uma refeição – ela é o ingrediente principal para criar memórias e compartilhar alegria. 
        É por isso que estamos entusiasmados em convidar você para participar dos nossos eventos especiais, onde sabor, diversão e boa companhia 
        se encontram em perfeita harmonia.
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