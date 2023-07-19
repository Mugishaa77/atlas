import Logo from '../tea/Logo.PNG';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
      

<div className="Navbar">
            <nav>
  <div className="logo">
    <Link to="/">
  <img src={Logo} width="200" height="65px" alt=""/>
  </Link>
  </div>
  <ul>
    <li><a href="/">HOME</a></li>
    <li><a href="/about">ABOUT US</a></li>
    <li><a href="/service">SERVICES</a></li>
    <li><a href="/news">NEWS</a></li>
    <li><a href="/auction">TEA AUCTION</a></li>
    <li><a href="/contact">CONTACT US</a></li>
  </ul>
</nav>

        </div>

       
    );
}