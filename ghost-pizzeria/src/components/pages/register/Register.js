import React from 'react';
import './Register.css'
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='register-principal-div'>

      <form className='register-page-form'>

        <label><span>Criar cadastro</span></label>
        <input  
        type='text'
        placeholder='Nome Completo'
        />

        <input  
        type='text'
        placeholder='Email'
        />

        <input
         type='password'
         placeholder='Senha'
        />

        <input
         type='password'
         placeholder='Confirme sua senha'
        />

        <button className='btn-register'>Criar cadastro</button>
        <p>Já possui seu cadastro? <a>Ir para a página de login.</a></p>
      </form>

    </div>
  );
};

export default Register;