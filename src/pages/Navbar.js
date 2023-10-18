import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Logo from '../tea/Logo.PNG';

export default function Navbar() {
  
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null); // New state variable
  const location = useLocation(); // Get the current location from React Router

  const handleMenuToggle = (menuItem) => {
  setIsMenuActive(!isMenuActive);
  setActiveMenuItem(menuItem);
};




  const isActive = (pathname) => {
    return location.pathname === pathname || activeMenuItem === pathname
      ? { color: 'var(--atlas-green)' }
      : {};
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
        <div className={`menu-toggle ${isMenuActive ? 'active' : ''}`} onClick={handleMenuToggle} >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
          <li><Link to="/" style={isActive('/')} >HOME</Link></li>
          <li className="dropdown">
            <Link to="/about" style={isActive('/about')}>ABOUT <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg> </Link>
            <ul className="dropdown-items">
              <li><Link to="/profile" style={isActive('/profile')}>Profile</Link></li>
               <li><Link to="/community" style={isActive('/community')}>Community</Link></li>
                <li><Link to="/science" style={isActive('/science')}>Science</Link></li>
              </ul></li>        
          <li><Link to="/service" style={isActive('/service')}>SERVICES</Link></li>
          <li><Link to="/auction" style={isActive('/auction')}>TEA AUCTION</Link></li>
           <li><Link to="/news" style={isActive('/news')}>NEWS</Link></li>
          <li><Link to="/garden" style={isActive('/garden')}>GALLERY</Link></li>
          <li><Link to="/contact" style={isActive('/contact')}>CONTACT US</Link></li>
        </ul>
      </nav>
    </div>
  );
}
