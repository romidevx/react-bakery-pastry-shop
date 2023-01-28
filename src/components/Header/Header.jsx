import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className="header__inner">
        <h2>Bakery & Pastry Shop</h2>
        <h4>{new Date().toDateString()}</h4>
      </div>
    </div>
  )
}

export default Header;