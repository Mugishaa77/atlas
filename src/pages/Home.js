import { Link } from 'react-router-dom';
import '../App.css';
import mata from '../tea/mata-tea.png';

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
             <p><span>Atlas Tea Brokers, established in 2002, is a reputable tea brokerage company that has quickly 
                    become a frontrunner in the tea trade.</span> <br />
                    Our <strong>profound understanding of the tea industry</strong> and <strong>commitment
                     to excellence </strong>have made us a preferred choice for both tea producers and buyers.
                     <br /> Since joining the 
                     East African Tea Trade Association (EATTA) in July 2015, we have consistently excelled in our role
                      as a bridge between producers and buyers, representing <strong>36 prestigious tea gardens</strong> from five 
                      countries. <br />
                       Today, our company commands an impressive <strong>5% market share</strong> , a testament to our dedication
                       in securing the best prices for our clients under prevailing market conditions.</p>
            </div>

                 <div className="about-button">
                    <Link to="/about">
                         <button>Tea Journey</button>
                    </Link>
                   
                 </div>
            
          </div>

          <div className="why-us">
            <h1>Why Choose Us?</h1><hr/>

            <div className="row">
                
                <div className="col">
                      <ul>
                <li> We <span>Know</span> the History and envision the Future</li>
                <li>We are Elastic</li>
                <li>We can get you most answers on questions you may have on the industry</li>
                <li>We are asking the right questions</li>
                <li>We are authentic, you will enjoy working with us</li>
            </ul>
                </div>

                <div className="col">
                    <img src={mata} alt="mata tea plantation" title="mata tea plantation" />
                </div>
            </div>
          
            

            <p><em>We Know Tea </em></p>
          </div>
          

          </div>
        
    );

}