import Directors from '../components/Directors';


import '../App.css';

export default function About () {
    return (
        <div className="about">
             <h2>ABOUT ATLAS  <hr /></h2>

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

  <div className="about-lists">         
<div className="journey">
                <h3> OUR JOURNEY IN NUMBERS </h3>
                         <ul >
                    <li>Date of Company registration: <span className="num"> 2002</span> </li>

<li>Date of admission to EATTA: <span className="num"> July 2015</span> </li>

<li>Maiden Auction: <span className="num"> Sale 39 of September 2015</span> </li>

<li>Number of Marks at the inaugural sale: <span className="num"> 3</span></li>

<li>Number of Gardens today: <span className="num"> 33 from 4 countries</span></li>

<li>Current market share: <span className="num"> 5%</span> </li>
                </ul>
<p>We Are Growing...</p>
                    
                
                       
             
            </div>

            
            
                <div className="why-us">
            
                <h3>WHY CHOOSE US?</h3>
                <ul >
                <li> We <span>Know</span> the History and envision the Future</li>
                <li> We are Elastic</li>
                <li> We can get you most answers on questions you may have on the industry</li>
                <li> We are asking the right questions</li>
                <li> We are authentic, you will enjoy working with us</li>
            </ul>
              <p><em>We Know Tea </em></p>
                
          
            </div>
           </div>
            
              
          

           
           
               
    <div className="directors-component">
            <Directors />
           </div>

           <div className="staff">
            <h3>STAFF<hr/></h3>

            <p>With <span>over 70 years</span> of combined industry experience, 
                our team is composed of <span>90% youthful talent, </span> 
                ensuring both deep-rooted expertise and a sustainable
                 future.</p>
           </div>

           

           
             </div>
    );
}