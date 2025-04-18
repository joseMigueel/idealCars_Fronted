import React, { useState } from 'react';

import '../style/navBar.css';

const NavBar = ({ isLoggedIn, userName, onShowLogin, onLogout }) => {
  
  return (
    <header className='navBar'>
      <h1>IdealCars</h1>
      <div>
        {isLoggedIn ? (
          <>
          <span>hola, {userName}</span>
          <button className='logoutButton' onClick={onLogout}>
            Cerrar sesión
            </button>
          </>
        ) : (
          <button className='loginButton' onClick={onShowLogin}>
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  )
}

export default NavBar;