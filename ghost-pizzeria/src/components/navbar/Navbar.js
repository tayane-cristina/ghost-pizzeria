import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='principal-div-navbar'>
        <div className='headerPage-pre'>
            <ul className='headerPage-pre-ul-authentication'>
                <Link to='/'><span>GHOST</span></Link>
                <Link to='/menu'><li className='btn-cart'><img src='https://img.icons8.com/?size=30&id=59997&format=png' alt='imagem-de-carrinho-de-compras'/></li></Link>
            </ul>
            <ul className='headerPage-ul-SocialMedial'>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=16733&format=png' alt='image-whatsApp'/></li>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=32309&format=png' alt='image-instagram'/></li>
                <li><img className='headerPage-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=8824&format=png' alt='image-twitter'/></li>    
            </ul>
        </div>

        <header className='headerPage-principalHeader'>
            <Link to='/'><h2 className='headerPage-logo'>GHOST PIZZARIA</h2></Link>
            <nav className='headerPage-nav'>
                <ul className='headerPage-nav-ul'>
                    <Link to="/events"><li className='li-nav'>Programações</li></Link>
                    <Link to="/menu"><li className='li-nav'>Cardápio</li></Link>
                    <Link to="/about"><li className='li-nav'>Sobre</li></Link>
                </ul>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;