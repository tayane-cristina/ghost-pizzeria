import React from 'react';
import './Party.css'

const Party = () => {
  return (
    <div className='principal-div-party'>
      <h2 className='party-h2'>Celebre seu Aniversário na Ghost Pizzaria!</h2>
      <img className='party-img' src='https://images.pexels.com/photos/7219244/pexels-photo-7219244.jpeg?auto=compress&cs=tinysrgb&w=600' alt='image-party-in-pizzaria'/>

      <ul className='party-infor'> Por que escolher a Ghost Pizzaria
        <li> Ambiente Acolhedor: Espaço decorado especialmente para criar o clima perfeito para a sua celebração.</li>
        <li>Cardápio Personalizado: Variedade de pizzas deliciosas, incluindo opções vegetarianas, veganas e sem glúten. Também oferecemos entradas, saladas e sobremesas irresistíveis.</li>
        <li>Pacotes Especiais para Festas: Incluem bebidas, pizzas à vontade e sobremesas, tudo a preços incríveis!</li>
        <li>Atendimento Exclusivo: Nossa equipe dedicada garantirá que todos os detalhes da sua festa sejam perfeitos.</li>
        <li>Brindes e Decorações: Oferecemos balões, chapéus de festa e um bolo de cortesia para aniversariantes que celebrarem conosco.</li>
      </ul>

      <ul className='party-infor'> Benefícios exclusivos para aniversáriante    
        <li>Pizza grande grátis no dia do seu aniversário!</li>
        <li>Desconto de 10% no total da conta.</li>
        <li>Foto da festa publicada em nossas redes sociais (com autorização) para você compartilhar esse momento especial.</li>
      </ul>

      <ul className='party-infor'>Como planejar o seu evento:
        <li>Escolha a Data: Decida o melhor dia e horário para a sua festa.</li>
        <li>Faça sua Reserva: Entre em contato conosco pelo Telefone para contato ou pelas nossas redes sociais.</li>
        <li>Personalize: Escolha o cardápio e os detalhes que mais combinam com você e seus convidados.</li>
      </ul>
    </div>
  );
};

export default Party;