import React,{ useState, useEffect } from 'react'
import NavBar from './components/Navbar';
import AdForm from './components/AdForm';
import "./style/navBar.css"
import "./style/App.css"
import AdList from './components/AdList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [ads, setAds] = useState(() => {
    const storeAds = localStorage.getItem('ads');
    return storeAds ? JSON.parse(storeAds) : [];
  }); 

  useEffect(() => {
    localStorage.setItem('ads', JSON.stringify(ads));
  }, [ads]);

  const pressButton = () => {
    setShowForm(!showForm);
  };

const addAds = (newAd) => {
  setAds((prevAds) => [...prevAds, newAd]);
  setShowForm(false)
};

const deleteAd = (indexDelete) => {
  setAds((prevAds) => prevAds.filter((_, index) => index !== indexDelete));
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
      <>
    <div className='button_close_top'>
    <button className='closeButton' onClick={pressButton}>
    Cerrar
    </button>
    </div>
    <AdForm onAddAd={addAds} />
    </>
    )}
    <AdList ads={ads} onDeleteAd={deleteAd} />
  </div>
  );
}
export default App
