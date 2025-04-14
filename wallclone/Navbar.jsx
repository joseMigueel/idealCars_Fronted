import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo y elementos de navegación */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-blue-600">MiApp</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Productos
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Servicios
              </a>
              <a href="#" className="border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contacto
              </a>
            </div>
          </div>

          {/* Botón de acción */}
          <div className="hidden md:flex items-center">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              Iniciar Sesión
            </button>
          </div>

          {/* Botón móvil */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 text-base font-medium">
              Inicio
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Productos
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Servicios
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Contacto
            </a>
            <div className="mt-4 pl-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}