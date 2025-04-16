import React,{ useState } from 'react'
import NavBar from './components/Navbar';
import AdForm from './components/AdForm';
import "./style/navBar.css"
import "./style/App.css"

function App() {
  const [showForm, setShowForm] = useState(false);

  const pressButton = () => {
    setShowForm(!showForm);
  };

  return (
  <div className='App'>
    <NavBar />
    {!showForm && (
    <div className='button_ad'>
    <button className='adButton' onClick={pressButton}>
    Añadir anuncio
    </button>
    </div>
    )}
    {showForm && (
    <div className='button_close_top'>
    <button className='closeButton' onClick={pressButton}>
    Cerrar
    </button>
    </div>
    )}
    {showForm && <AdForm />}
  </div>
  );
}
export default App
