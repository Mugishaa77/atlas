import Logo from '../tea/Logo.PNG';
import '../App.css';

export default function Navbar () {
    return (
        <div className="Navbar">
            <nav>
  <div className="logo">
  <img src={Logo} width="" height="60px" alt=""/>
  </div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/service">Services</a></li>
    <li><a href="/news">News</a></li>
    <li><a href="/auction">Tea Auction</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>

        </div>
    );
}