import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Hyperlink from '../components/Hyperlink';


export default function Auction () {
    return (
        <div className="auction">
            <h2>TEA AUCTION <hr/></h2>
            <p>
                At Atlas, we actively participate in weekly tea auctions, a cornerstone of the tea industry,
                 where a variety of teas find their way to discerning buyers.
                  We operate under the auspices of the  East African Tea Trade Association (EATTA).
                  
                         </p>
                
                     
                                             
<div className="output">        
                                                 <div className="side-nav">
                <h3>
                    <strong>OUR AUCTIONS <br/><hr/>
                        <span> (click to view)</span>
                    </strong></h3>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/auction-schedule"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> Auction Schedule</NavLink>

<NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/sale-catalogues"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> Post Sale Catalogues</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/market-reports"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> Weekly Market Reports</NavLink>

                

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/forthcoming"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> Forthcoming Auctions</NavLink> 

<h4>
                    <strong>MARKET PERFORMANCE REPORTS <br/><hr/>
                       
                    </strong></h4><div className="rr">
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/industry-report"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg> Performance Reports</NavLink>

</div>


    <NavLink 
    className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            } to="/auction">
        <span className="backlink"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>back</span>
    </NavLink>

            </div>

            <div className="content">
                <Outlet />

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