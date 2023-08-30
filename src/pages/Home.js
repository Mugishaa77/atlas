import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import homepage from '../tea/homepage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGavel, faLeaf, faNewspaper } from "@fortawesome/free-solid-svg-icons";
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

      <div className="mid-part">
        
        <div className="home-news">
         <h3>
          <Link to="/">
             Tea News <FontAwesomeIcon icon={faNewspaper} />
        </Link></h3>
        </div>
        

       
        <div className="home-gardens">
          <h3><Link to="/">Garden Catalogues <FontAwesomeIcon icon={faLeaf} />
           </Link></h3></div>
           

           
                <div className="home-auction">
          <h3><Link to="/">Auction Catalogues <FontAwesomeIcon icon={faGavel} /></Link></h3>
        </div>
      
      </div>

      <div className="footer">
       <div className="footer-inner">
        
        <h2>WE ARE LOCATED AT</h2>
        
        <h3>Sec, 1 M. Nyali, (Off Links Shell Petrol Station)</h3>
        
        <hr/>
        <h4> <span>

              <strong>Tel:</strong> <a
                href="tel:0414471226"
                target="_blank"
                title="Tel"
                rel="noopener noreferrer"
            >041 4471226
              </a></span>
<br/>
              <span><strong>Mob:</strong> <a
                href="tel:+254729404044"
                target="_blank"
                title="Mob"
                rel="noopener noreferrer"
              >+254 729 404 044
              </a></span>

            </h4>
            
      </div>
    </div>
    </div>
  );
}
