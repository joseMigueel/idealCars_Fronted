import React from 'react';
import '../style/login.css'

const Register = () => {
    return (
        <form className='loginForm'>
            <h2>Registro</h2>
            <input type="text" placeholder="Tu email" />
            <input type="password" placeholder="Tu contraseña" />
            <button type="submit">Registrarse</button>
        </form>
    )
};

export default Register;