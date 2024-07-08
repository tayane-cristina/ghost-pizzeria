import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-principal-div'>
  
      <div className='footer-infor'>
        <h2 className='footer-logo'>GHOST</h2>

        <ul className='footer-infor-techs'>
            <li>React</li>
            <li>JSX</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>icons8</li>
            <li>React Hooks</li>
        </ul>

        <ul className='footer-ul-SocialMedial'>
            <li><img className='footer-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=16712&format=png' alt='image-whatsApp'/></li>
            <li><img className='footer-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=32292&format=png' alt='image-instagram'/></li>
            <li><img className='footer-ul-SocialMedial-img' src='https://img.icons8.com/?size=50&id=437&format=png' alt='image-twitter'/></li>    
        </ul>

      </div>
      <p>Copyright &copy; 2024 Tayane Cristina</p>
    </div>
  );
};

export default Footer ;