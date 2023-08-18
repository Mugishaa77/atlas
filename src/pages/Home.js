import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import homepage from '../tea/homepage.png';
import '../App.css';

export default function Home() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = homepage;
    bgImage.onload = () => {
      setBgLoaded(true);
    };
  }, []);

  const homeStyles = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundColor: '#f5f5f5',
    height: '500px',
    padding: '2rem',
    color: 'var(--atlas-blue)',
    backgroundImage: bgLoaded ? `url(${homepage})` : 'none',
  };

  // Media Query for screens with max width 900px
  
 if (window.innerWidth <= 900) {
  homeStyles.height = '300px'; // Adjusted height for smaller screens
  homeStyles.padding = '0.5rem'; // Further adjusted padding for smaller screens
}

  return (
    <div>
      <div className="home" style={homeStyles}>
        <h1 className="glass-text">
          We Know Tea!
        </h1>
      </div>

      <div className="home-about">
        <h1>ATLAS TEA BROKERS LIMITED<hr /></h1>
        

        <div className="about-p">
          <p>
            <strong>Established in 2002, Atlas Tea Brokers is a Leading Tea Brokerage Company</strong>.<br />
            As a member of <strong>East Africa Tea Trade Association (EATTA)</strong> since July <strong>2015</strong>, we bridge producers and buyers, representing <strong>36 esteemed tea gardens</strong> across
            <strong> Kenya, Rwanda, Burundi, Uganda, and Tanzania</strong>.<br />
            With a strong <strong>7% market share</strong>, we consistently secure optimal prices for our clients.
          </p>
        </div>

        <div className="about-button">
          <Link to="/about">
            <button>About Us</button>
          </Link>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}
