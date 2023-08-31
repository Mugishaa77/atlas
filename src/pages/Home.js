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
          <Link to="/about" title="More About Atlas">
            <button>About Us</button>
          </Link>
        </div>
      </div>

      <div className="mid-part">
        
        <div className="home-news">
         <h3>
          <Link to="/news" title="Go to News Page">
             Tea News <FontAwesomeIcon icon={faNewspaper} />
        </Link></h3>
        </div>
        

       
        <div className="home-gardens">
          <h3><Link to="/garden"  title="See Tea Gardens">Gardens in our Catalogue
         <FontAwesomeIcon icon={faLeaf} />
           </Link></h3></div>
           

           
                <div className="home-auction">
          <h3><Link to="/auction" title="See Auction Page">Tea Auction <FontAwesomeIcon icon={faGavel} /></Link></h3>
        </div>
      
      </div>

      <div className="footer">
       <div className="footer-inner">
        
        <h2>WE ARE LOCATED AT</h2>
        
        <h3>
        <a href="" title="go to pin">
        Shree Plaza Building, 4th Floor
        <br/>
        Fidel Odinga Rd Nyali</a></h3>
        
        <hr/>
        <h4> <span>

              <strong>Tel:</strong> <a
                href="tel:+254782404044"
                target="_blank"
                title="call"
                rel="noopener noreferrer"
            > +254 782 404 044
              </a></span>
<br/>
              <span><strong>Mob:</strong> <a
                href="tel:+254729404044"
                target="_blank"
                title="call"
                rel="noopener noreferrer"
              >+254 729 404 044
              </a></span>

            </h4>
            
      </div>
    </div>
    </div>
  );
}
