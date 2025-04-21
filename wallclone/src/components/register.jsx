import React, { useState } from 'react';
import '../style/login.css'

const Register = ({onRegisterSuccess}) => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const updateRegisterInput = (inputEvent) => {
        const { name, value } = inputEvent.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const sendRegisterForm = (submitEvent) => {
        submitEvent.preventDefault();
        if (formData.password !== formData.confirmPassword){
            alert('La contraseña no coinciden');
            return;
        }

        const newUser = {
            userName: formData.userName,
            email: formData.email,
            password: formData.password
        };

        const usersExist = JSON.parse(localStorage.getItem('users')) || [];
        usersExist.push(newUser);

        localStorage.setItem('userName', JSON.stringify(usersExist));

        alert(`Usuario ${formData.userName} registrado correctamente`);
        setFormData({   
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        if (onRegisterSuccess) {
            onRegisterSuccess(newUser.userName)
        }
    };
    return (
        <form onSubmit={sendRegisterForm} className='loginForm'>
            <h2>Registro</h2>
            <input
                type="text"
                name='userName'
                placeholder='Nombre de usuario'
                value={formData.userName}
                onChange={updateRegisterInput}
                required/>
            <input
                type="email"
                name='email'
                placeholder='Correo electrónico'
                value={formData.email}
                onChange={updateRegisterInput}
                required
            />
            <input
                type='password'
                name='password'
                placeholder='Contraseña'
                value={formData.password}
                onChange={updateRegisterInput}
                required
            />
            <input
            type="password"
            name='confirmPassword'
            placeholder='Confirmar contraseña'
            value={formData.confirmPassword}
            onChange={updateRegisterInput}
            required
            />
            <button type='submit'>Registrarse</button>
        </form>
    )
};

export default Register;