import React from 'react';
import './Navbar.css';
import FilterItem from '../filterItem/FilterItem';
import { menu } from '../../data/Data';

//O que vai no componente Header:
/*ls
    header e pré-header
    - LOGO
    - Opções de autenticação
    - Opção de pesquisa
    - contatos / redes sociais / paginá de localição 
*/

const Navbar = () => {
  return (
    <div>
        <div className='headerPage-pre'>
            <ul className='headerPage-pre-ul-authentication'>
                <span>GHOST Pizzeria</span>
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
            <h2 className='headerPage-logo'>GHOST</h2>
            <nav>
                <ul className='headerPage-nav-ul'>
                    <li>Restaurantes</li>
                    <li>Programações</li>
                </ul>
            </nav>
        </header>
    </div>
  );
};

export default Navbar;