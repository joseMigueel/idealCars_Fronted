import React from 'react';

const NavbarBrand = ({ children }) => {
  return (
    <div className="flex-shrink-0 font-bold text-xl">
      {children || 'Logo'}
    </div>
  );
};

export default NavbarBrand;