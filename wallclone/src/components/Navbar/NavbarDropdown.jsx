import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const NavbarDropdown = ({ title, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Estilo para versión móvil o desktop
  if (isMobile) {
    return (
      <div>
        <button 
          onClick={toggleDropdown}
          className="flex items-center justify-between w-full text-left px-3 py-2 hover:bg-gray-700 rounded transition-colors"
        >
          {title}
          <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="pl-4 space-y-1 mt-1">
            {items.map((item, index) => (
              <a 
                key={index} 
                href={item.href || '#'} 
                className="block px-3 py-2 hover:bg-gray-700 rounded transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Versión desktop
  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center px-3 py-2 hover:bg-gray-700 rounded transition-colors"
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded shadow-lg py-1 z-10">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.href || '#'} 
              className="block px-4 py-2 hover:bg-gray-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;