import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Logo from '../tea/Logo.PNG';

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation(); // Get the current location from React Router

  const handleMenuToggle = () => {
    setIsMenuActive(!isMenuActive);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname ? { color: 'var(--atlas-green)' } : {};
  };

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <Link to="/">
            <img
              src={Logo}
              width="200"
              height="65px"
              alt="Atlas Tea Brokers Ltd, Tea Brokerage Company in Mombasa, Kenya representing Kenya, Rwanda, Burundi, Kenya, and Tanzania in the EATTA"
              title="Atlas Tea Brokers Ltd, Kenya"
            />
          </Link>
        </div>
        <div className={`menu-toggle ${isMenuActive ? 'active' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
          <li><Link to="/" style={isActive('/')} >HOME</Link></li>
          <li><Link to="/news" style={isActive('/news')}>NEWS</Link></li>
          <li><Link to="/about" style={isActive('/about')}>ABOUT US</Link></li>
          <li><Link to="/service" style={isActive('/service')}>SERVICES</Link></li>
          <li><Link to="/auction" style={isActive('/auction')}>TEA AUCTION</Link></li>
          <li><Link to="/garden" style={isActive('/garden')}>GALLERY</Link></li>
          <li><Link to="/contact" style={isActive('/contact')}>CONTACT US</Link></li>
        </ul>
      </nav>
    </div>
  );
}
