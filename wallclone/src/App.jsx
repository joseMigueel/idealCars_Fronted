import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Contenido de ejemplo para demostrar que la navbar funciona */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Bienvenido a Mi Sitio</h1>
        <p className="mb-4">Esta es una aplicación React con una barra de navegación responsive.</p>
        
        {/* Contenido para mostrar scroll */}
        {Array(10).fill().map((_, i) => (
          <div key={i} className="bg-white p-6 mb-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Sección {i + 1}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;