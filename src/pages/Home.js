import { Link } from 'react-router-dom';
import '../App.css';
import mata from '../tea/mata-tea.png';
import karirana from '../tea/karirana.png';
import kapchorua from '../tea/kapchorua.png';

export default function Home () {
    return (
        <div>
        <div className="home">
            
            
           <h1 className="glass-text">
            We Know Tea!</h1>
         
        </div>

        <div className="home-about">
            <h1>ATLAS TEA BROKERS LIMITED
                <hr />

            </h1>

            <div className="about-p">
             <p>
                Established in <strong>2002</strong>, Atlas Tea Brokers is a leading tea brokerage company.<br/>
                 As a member of <strong>East Africa Tea Trade Association(EATTA)</strong> since July 2015, we bridge producers and buyers, representing 36 esteemed tea gardens across Kenya, Rwanda, Burundi, Uganda and Tanzania.
                 <br/> With a strong <strong>7% market share</strong>, we consistently secure optimal prices for our clients.
                </p>            </div>

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