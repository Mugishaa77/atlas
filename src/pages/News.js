import '../News.css';
import DateTimeDisplay from '../components/DateTimeDisplay';
import audit from '../tea/aaudit.jpg';
import dollar from '../tea/dollar.jpg';
import dar from '../tea/dar-auction.png';
import darr from '../tea/darr.jpg';
import React, { useState, useEffect } from 'react';


export default function News () {
   useEffect(() => {
    document.title = 'News - Atlas Tea Brokers';
  }, []);
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
    
    useEffect(() => {
    // Update the lastUpdated value when your content changes
    // For example, when a data fetch or other updates occur
    // You can call setLastUpdated with the new date and time
    const updateLastUpdated = () => {
      setLastUpdated(new Date().toLocaleString());
    };

    // Call the updateLastUpdated function whenever your content changes
    updateLastUpdated();
    }, []);

    return (
         <div className="news">
           <h2>NEWS<hr/></h2>
           <div className="time">
            <DateTimeDisplay />
           
           </div>
           <div className="stories">

            <div className="story">
            <h3>What Dar es Salaam Tea Auction means for Tanzania</h3>
            <div className="frame"> 
            <div className="new-pic">     
                <img src={dar} alt="atlas news" />
                <span >News Source: The Citizen(tz) <br/>
                Photo Credit: Kilimo Kwanza</span>
                </div>  
            <p>
               The Tea Board of Tanzania (TBT) director general Mary Kipeja,  told the Citizen that the tea auction would make Tanzania a regional hub where neighbouring tea producing countries would be trading their produce.
               <br/>
               Tanzanians would also be empowered economically as a result of reduced market costs and implementation of the local content agenda.
                           </p>
< a href="https://www.thecitizen.co.tz/tanzania/news/business/what-today-s-first-tea-auction-in-dar-means-for-the-country--4431748"
            target="_blank"
            rel="noopener noreferrer">
                Read More Here </a>
                </div>   
                <hr/>
            </div>

            <div className="story">
            <h3>Tanzania Holds it's first online Tea Auction in Dar-es-Salaam</h3>
            <div className="frame"> 
            <div className="new-pic"> 
                        
                  <img src={darr} alt="atlas news" />   
               
                <span a href="https://twitter.com/voag_tv/status/1724395624181739989">
                  News Source: Standard Media <br/>
                Photo Credit: VOAG (voice of agriculture_tv) </span>
                </div>  
            <p>
              Tanzania intends to leverage the tea auctions by June 2024 with the goal of safeguarding the domestic
               market and supporting local tea producers.
               <br/> The inaugural tea auction, which took place on November 13, 2023, in Dar es Salaam, is anticipated to bring about a significant transformation in the country's tea sub-sector.
               
                           </p>
< a href="https://www.standardmedia.co.ke/business/business/article/2001485446/tanzanian-direct-tea-sales-set-to-rival-mombasa-auction"
            target="_blank"
            rel="noopener noreferrer">
                Read More Here </a>
                </div>   
                <hr/>
            </div>

         <div className="story">
            <h3>Scarce Dollar Opens Talks for Barter Trade Between Kenya and Egypt</h3>
            <div className="frame"> 
            <div className="new-pic">     
                <img src={dollar} alt="atlas news" />
                <span a href="https://www.bloomberg.com/news/articles/2023-11-06/short-of-dollars-kenya-says-egypt-asks-to-barter-for-tea">News Source: Bloomberg
                <br/>Photo Credit: Bloomberg</span>
                </div>  
            <p>Egypt asks Kenya to barter its Tea for anything produced in the North African
               country as a dollar shortage has impacted their ability to pay for imports.
               <br/>
               “Right now we cannot get your tea.
                It's lying in Mombasa because we have no dollars to pay,” 
                Ndung'u reported the ambassador as saying, referring to the major Kenyan port city.
                 “We'll get your tea and you also come and decide what you get from us.”
               
                           </p>
< a href="https://www.bloomberg.com/news/articles/2023-11-06/short-of-dollars-kenya-says-egypt-asks-to-barter-for-tea#xj4y7vzkg"
            target="_blank"
            rel="noopener noreferrer">
                Read More Here </a>
                </div>   
                <hr/>
            </div>

            <div className="story">
            <h3>Kenya's tea value chain under scrutiny to assess rising production costs</h3>
            <div className="frame">       
             <div className="new-pic">     
                <img src={audit} alt="atlas news" />
                <span>News Source: Nation News</span>
                </div>   
               
            <p>The value chain in Kenya's Tea sector is set for audit amid growing concerns over high 
                production costs that are cutting into farmers' earnings.
                <br/>
                Purpose of the audit is to help safeguard the interests of small shareholder farmers and gains in the industry.
            <br/>
          
                </p>

                < a href="https://nation.africa/kenya/business/kenya-tea-value-chain-for-audit-on-high-production-costs-4424382"
            target="_blank"
            rel="noopener noreferrer">
                Read More Here
            </a>
</div>         
<hr/> 
 </div>
           </div>
            <span>
             Last Updated: {lastUpdated}
           </span>
           
        </div>
    );
}