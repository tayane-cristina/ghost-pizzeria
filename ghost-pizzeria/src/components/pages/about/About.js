import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='principal-div-about'>
      <h2 className='about-h2'>Sobre está página</h2>
      <div className='div-text-about'>
        <p className='about-subTitle'>Bem-vindo à Ghost Pizzaria!</p>
        <p className='about-text'>
          Apesar de não sermos uma pizzaria de verdade, criamos este site para mostrar um pouco dos nossos conhecimentos em desenvolvimento web, 
          especialmente em CSS e React. Aqui, cada detalhe foi pensado para proporcionar a melhor experiência visual e interativa, desde o design 
          responsivo até as animações suaves que você encontrará em cada página.
          Nosso objetivo com este projeto é demonstrar as habilidades que adquirimos na criação de interfaces modernas e funcionais, que são essenciais 
          em qualquer projeto digital. De uma navegação intuitiva a um layout atraente, o site da [Nome da Pizzaria] é um exemplo de como tecnologia e 
          design podem trabalhar juntos para criar algo incrível.
          Sinta-se à vontade para explorar o site, "pedir" uma pizza, e ver como combinamos códigos e criatividade para entregar uma experiência completa. 
          E, claro, se você também está no mundo do desenvolvimento, esperamos que este site inspire novas ideias e projetos.
          Obrigado por visitar e aproveitar o sabor dessa experiência digital!
        </p>
      </div>
      
    </div>
  );
};

export default About;