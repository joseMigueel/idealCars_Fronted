import React,{ useState, useEffect } from 'react'
import NavBar from './components/Navbar';
import AdForm from './components/AdForm';
import Login from './components/login';
import Register from './components/register';
import "./style/navBar.css"
import "./style/App.css"
import AdList from './components/AdList';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [ads, setAds] = useState(() => {
    const storeAds = localStorage.getItem('ads');
    return storeAds ? JSON.parse(storeAds) : [];
  }); 
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [ userName, setUserName ] = useState('');
  const [ showLogin, setShowLogin ] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  
  useEffect(() => {
    localStorage.setItem('ads', JSON.stringify(ads));
  }, [ads]);

  useEffect (() => {
    const savedUser = localStorage.getItem('userName');
    if (savedUser) {
      setUserName(savedUser);
      setLoggedIn(true);
    }
  }, []);

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

const logUserIn = (name) => {
  setLoggedIn(true);
  setUserName(name);
  localStorage.setItem('userName', name);
  setShowLogin(false);
  setShowRegister(false);
  alert(`Bienvenido, ${name}`);
}

const logout = () => {
  setLoggedIn(false);
  setUserName('');
  localStorage.removeItem('userName');
};


  return (
  <div className='App'>
    <NavBar 
      isLoggedIn={isLoggedIn}
      userName={userName}
      onLogin={logUserIn}
      onLogout={logout}
      onShowLogin={() => {
        setShowLogin(true);
        setShowRegister(false)
      }}
      onShowRegister={() => {
        setShowRegister(true);
        setShowLogin(false);
      }}
      />

      {!isLoggedIn && showLogin && (
        <>
        <div>
          <button className='closeButton' onClick={() => setShowLogin(false)}>
          cerrar
          </button>
        </div>
        <Login onLogin={logUserIn}/>
        </>
      )}
      {!isLoggedIn && showRegister && (
        <>
        <div>
          <button className='closeButton' onClick={() => setShowRegister(false)}>
          Cerrar
          </button>
        </div>
        <Register />
        </>
      )}
    {isLoggedIn && !showForm && (
    <div className='button_ad'>
    <button className='adButton' onClick={pressButton}>
    Añadir anuncio
    </button>
    </div>
    )}
    {isLoggedIn && showForm && (
      <>
    <div className='button_close_top'>
    <button className='closeButton' onClick={pressButton}>
    Cerrar
    </button>
    </div>
    <AdForm onAddAd={addAds} />
    </>
    )}
    <AdList ads={ads} onDeleteAd={deleteAd} userName={userName}/>
  </div>
  );
}
export default App
