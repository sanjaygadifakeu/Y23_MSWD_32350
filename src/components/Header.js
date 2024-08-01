import React from 'react';
import kllogo from './kl_logo.png'; // assuming your logo is in the same directory as your component

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <img src={kllogo} alt="KL University Logo" style={{ height: '50px', marginRight: '10px' }} />
      <h1>Student Portal</h1> <h2>- ERP</h2>
    </header>
  );
}

export default Header;