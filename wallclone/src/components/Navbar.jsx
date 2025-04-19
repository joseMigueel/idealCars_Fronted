import React from 'react';
import '../style/navBar.css';

const NavBar = ({ isLoggedIn, userName, onShowLogin,onShowRegister, onLogout }) => {
  
  return (
    <header className='navBar'>
      <h1>IdealCars</h1>
      <div className='navLogRes'>
        {isLoggedIn ? (
          <>
          <span>hola, {userName}</span>
          <button className='logoutButton' onClick={onLogout}>
            Cerrar sesión
            </button>
          </>
        ) : (
          <>
          <button className='loginButton' onClick={onShowLogin}>
            Iniciar sesión
          </button>
          <button className='registerButton' onClick={onShowRegister}>
            Registrarse
          </button>
          </>
        )}
      </div>
    </header>
  )
}

export default NavBar;