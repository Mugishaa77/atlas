import '../News.css';
import DateTimeDisplay from '../components/DateTimeDisplay';
import audit from '../tea/aaudit.jpg';

export default function News () {
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