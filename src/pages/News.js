import '../News.css';
import DateTimeDisplay from '../components/DateTimeDisplay';
import audit from '../tea/aaudit.jpg';
import React, { useState, useEffect } from 'react';


export default function News () {
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
            <h3>Kenya's tea value chain under scrutiny to assess rising production costs.</h3>
            <div className="frame">        
                <img src={audit} />
            <p>The value chain in Kenya's Tea sector is set for audit amid growing concerns over high 
                production costs that are cutting into farmers' earnings.
                <br/>
                Purpose of the audit is to help safeguard the interests of small shareholder farmers and gains in the industry.
            <br/>
           <span>
             Last Updated: {lastUpdated}
           </span>
                </p>

                < a href="https://nation.africa/kenya/business/kenya-tea-value-chain-for-audit-on-high-production-costs-4424382"
            target="_blank"
            rel="noopener noreferrer">
                Read More Here
            </a>
</div>

           </div>
              
           </div>
           
               
           
        </div>
    );
}