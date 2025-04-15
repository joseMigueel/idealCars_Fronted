import React from 'react';
import NavbarLink from './NavbarLink';
import NavbarDropdown from './NavbarDropdown';

const MobileMenu = ({ isOpen, links, dropdowns }) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden border-t border-gray-700">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {links.map((link, index) => (
          <NavbarLink 
            key={index} 
            href={link.href} 
            className="block w-full"
          >
            {link.label}
          </NavbarLink>
        ))}
        
        {dropdowns.map((dropdown, index) => (
          <NavbarDropdown 
            key={index} 
            title={dropdown.title} 
            items={dropdown.items} 
            isMobile 
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;