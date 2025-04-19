import React, { useState } from 'react';
import '../style/login.css'

const Login = ({ onLogin }) => {
    const [name, setName ] = useState('');

    const sendLoginForm = (send) => {
        send.preventDefault();
        if (name.trim() === ''){
            alert('Por favor, introduce tu nombre');
            return;
        }
        onLogin(name);
    };

    return(
        <form onSubmit={sendLoginForm} className='loginForm'>
            <h2>Iniciar sesión</h2>
            <input
            type="text"
            placeholder='Tu nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
            <button type='submit'>Entrar</button>
        </form>
    )
}

export default Login;