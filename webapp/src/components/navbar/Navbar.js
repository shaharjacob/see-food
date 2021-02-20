import React from 'react';
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.svg'


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} alt="SeeFood" />
      </div>
      <div className="navbar-menu-icon">
        <img src={Bars} width="20px" alt="Menu" />
      </div>
    </div>
  );
}

export default Navbar;
