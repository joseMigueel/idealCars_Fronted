import React from 'react';
import '../style/navBar.css';

const NavBar = ({ onAddClick, adVisible }) => {
  return (
    <header className='navBar'>
      <h1>Workroom</h1>
      <button onClick={onAddClick}>
        {adVisible ? 'Cerrar' : 'Añadir Coche'}
      </button>
    </header>
  )
}

export default NavBar;