import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <div className='headerPage-pre'>
            <ul className='headerPage-pre-ul-authentication'>
                <Link to='/'><span>GHOST Pizzeria</span></Link>
                <Link to='/cart'><li><img src='https://img.icons8.com/?size=30&id=59997&format=png' alt='imagem-de-carrinho-de-compras'/></li></Link>
                <li>Login</li>
                <li>Criar cadastro</li>
            </ul>
            <ul className='headerPage-ul-SocialMedial'>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=16733&format=png' alt='image-whatsApp'/></li>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=32309&format=png' alt='image-instagram'/></li>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=8824&format=png' alt='image-twitter'/></li>    
            </ul>
        </div>

        <header className='headerPage-principalHeader'>
            <Link to='/'><h2 className='headerPage-logo'>GHOST</h2></Link>
            <nav>
                <ul className='headerPage-nav-ul'>
                    <Link to="/local"><li>Restaurantes</li></Link>
                    <Link to="/events"><li>Programações</li></Link>
                    <Link to="/menu"><li>Cardápio</li></Link>
                </ul>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;