import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarBrand from './NavbarBrand';
import NavbarLink from './NavbarLink';
import NavbarDropdown from './NavbarDropdown';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Datos para los enlaces y dropdowns
  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Acerca de', href: '/about' },
    { label: 'Servicios', href: '/services' },
    { label: 'Contacto', href: '/contact' },
  ];

  const dropdowns = [
    {
      title: 'Productos',
      items: [
        { label: 'Producto 1', href: '/products/1' },
        { label: 'Producto 2', href: '/products/2' },
        { label: 'Producto 3', href: '/products/3' },
      ]
    },
    {
      title: 'Recursos',
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'Tutoriales', href: '/tutorials' },
        { label: 'Documentación', href: '/docs' },
      ]
    }
  ];

  // Cerrar el menú móvil al cambiar a pantalla grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Detectar scroll para cambiar el estilo de la navbar
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 bg-gray-800 text-white shadow-md transition-all duration-300 z-50 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavbarBrand>Mi Sitio</NavbarBrand>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link, index) => (
              <NavbarLink key={index} href={link.href}>
                {link.label}
              </NavbarLink>
            ))}
            
            {dropdowns.map((dropdown, index) => (
              <NavbarDropdown 
                key={index} 
                title={dropdown.title} 
                items={dropdown.items} 
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        links={links} 
        dropdowns={dropdowns} 
      />
    </nav>
  );
};

export default Navbar;