 import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import homepage from '../tea/homepage.png';
import Footer from '../components/Footer';
import Hyperlink from '../components/Hyperlink';
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
    backgroundColor: 'var(--atlas-green)',
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
        <p>Atlas is a Tea Company that was established in 2002.
          <br/>
          We have been members of the <strong>East African Tea Trade Association</strong> since July 2015.
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
          <h3><Link to="/garden"  title="See Tea Gardens">Tea Maps and Estates
         <FontAwesomeIcon icon={faLeaf} />
           </Link></h3></div>
           

           
                <div className="home-auction">
          <h3><Link to="/auction" title="See Auction Page">Tea Auction <FontAwesomeIcon icon={faGavel} /></Link></h3>
        </div>
      
      </div>

      <div className="footer">
       <div className="footer-inner">
        
        <h2>LOCATION</h2>
        
        <h3>
        <a href="https://maps.app.goo.gl/Epx7EccvX8pgA8ba7"
        target="_blank"
        rel="noopener noreferrer"
         title="go to pin">
        Shree Plaza Building, 4th Floor <sup className="redirect"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg></sup>
        <br/>
        Fidel Odinga Rd Nyali</a></h3>
        
        <hr/>
        <h4> 
           <span><strong>Mob:</strong> <a
                href="tel:+254729404044"
                target="_blank"
                title="call"
                rel="noopener noreferrer"
              > 0729 404 044
              </a></span>
              <br/>
<span>

              <strong>Tel:</strong> <a
                href="tel:+254782404044"
                target="_blank"
                title="call"
                rel="noopener noreferrer"
            > 0782 404 044
              </a></span>

             
            </h4>
            
      </div>
    </div>
    <div >
     <Hyperlink />
    </div>
    <div className="bottom">
      <Footer />
    </div>
    </div>
  );
}
