import React from 'react';
import './Login.css'
import { useState } from 'react';
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='login-principal-div'>

      <form className='login-page-form'>

        <label><span>Login</span></label>
        <input  
        type='text'
        placeholder='Email'
        
        />
        <input
         type='password'
         placeholder='Senha'

        />
        <button className='btn-login'>Entrar</button>
        <p>Ainda não possui cadastro? <a>Criar cadastro.</a></p>
      </form>

    </div>
  );
};

export default Login;