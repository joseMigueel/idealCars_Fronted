import React, { useState } from 'react';
import '../style/login.css'

const Login = ({ onLogin }) => {
    const [formData , setFormData ] = useState({
        userName: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendLoginForm = (send) => {
        send.preventDefault();

        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userFound = savedUsers.find(user => user.userName === formData.userName && user.password === formData.password);
        if (!userFound){
            alert('Usuario no encontrado');
            return;
        }
        onLogin(userFound.userName);
    };

    return(
        <form onSubmit={sendLoginForm} className='loginForm'>
            <h2>Iniciar sesión</h2>
            <input
            type="text"
            name='userName'
            placeholder='Tu nombre'
            value={formData.userName}
            onChange={handleInputChange}
            required/>
            <input
            type="password"
            name='password'
            placeholder='Tu contraseña'
            value={formData.password}
            onChange={handleInputChange}
            required
            />
            <button type='submit'>Entrar</button>
        </form>
    )
}

export default Login;