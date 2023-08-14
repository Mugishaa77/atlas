import dl from '../tea/dl-group-logo.png';
import dllogo from '../tea/DL-logo.png';
import emrok from '../tea/emrok-logo.png';
import karirana from '../tea/karirana-logo.png';
import maramba from '../tea/maramba-logo.png';
import mogeni from '../tea/mogeni-logo.png';
import nandi from '../tea/nandi-tea-logo.png';
import rwanda from '../tea/rwanda-logo.png';
import williamson from '../tea/williamson-logo.png';
import wood from '../tea/wood-logo.png';
import Directors from '../components/Directors';
import dlkoisagat from '../tea/DL-koisagat.png';
import '../App.css';

export default function About () {
    return (
        <div className="about">
             <h2>ABOUT ATLAS  <hr /></h2>
            <div className="about-one">
               
                
<div className="row">
                <div className="col">
                        <h3> OUR JOURNEY IN NUMBERS <hr /></h3>
                         <ul className="list-container">
                    <li>Date of Company registration: <span className="num"> 2002</span> </li>

<li>Date of admission to EATTA: <span className="num"> July 2015</span> </li>

<li>Maiden Auction: <span className="num"> Sale 39 of September 2015</span> </li>

<li>Number of Marks at the inaugural sale: <span className="num"> 3</span></li>

<li>Number of Gardens today: <span className="num"> 33 from 4 countries</span></li>

<li>Current market share: <span className="num"> 5%</span> </li>
                </ul>
</div>
                    <div className="col koisagat">
                        <img src={dlkoisagat} alt="DL Koisat tea factory, Kenya" title="DL Koisagat tea factory, Kenya"/>
                    </div>
               </div>
              <div>
                
                <h5 className="growth">We Are Growing...</h5>
           </div>
            </div>

           
            <div className="mission">
            <h3>OUR MISSION <hr /></h3>
            {/* h3s should be greeen */}
            <p>
                <span className="opening">At Atlas Tea Brokers, </span>
                     our mission is to <span className="opening">provide top-tier brokerage services</span> to both tea
producers and buyers, guiding them in navigating the complexities of the tea trade. <br/> With our
<span className="opening"> in-depth knowledge,</span> <span className="opening">unwavering commitment,</span> and <span className="opening">personalized approach,</span> we aim to ensure
that our clients' teas find the <span className="opening">right buyers</span> at the Mombasa Auction, 
securing <span className="opening">maximum value</span> to our clients.

            </p>
           </div> 
               
    <div className="directors-component">
            <Directors />
           </div>

           <div className="garden-catalogue">
            <h3>GARDEN CATALOGUE<hr/></h3>
           </div>

           
             </div>
    );
}