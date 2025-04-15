import React from 'react';

const NavbarLink = ({ href, children, className = '', onClick }) => {
  return (
    <a 
      href={href || '#'} 
      className={`px-3 py-2 hover:bg-gray-700 rounded transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavbarLink;