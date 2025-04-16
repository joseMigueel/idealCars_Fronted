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
    <button className='adButton' onClick={pressButton}>
    {showForm ? 'Cerrar' : 'Añadir anuncio'}
    </button>
    {showForm && <AdForm />}
  </div>
  );
}
export default App
