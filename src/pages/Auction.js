import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';


export default function Auction () {
    return (
        <div className="auction">
            <h2>TEA AUCTION <hr/></h2>
            <p>
                At Atlas, we actively participate in weekly tea auctions, a cornerstone of the tea industry,
                 where a wide range of tea grades and varieties find their way to discerning buyers.
                  Our auctions are conducted at the East African Tea Trade Association (EATTA) secretariat with utmost professionalism.
                  
                         </p>
                
                     
                                             

                                        
                                                 <div className="side-nav">
                <h3>
                    <strong>QUICK LINKS</strong></h3>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/auction-schedule">Auction Schedule</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/market-reports">Weekly Market Reports</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/sale-catalogues"> Post Sale Catalogues</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/forthcoming">Forthcoming Auctions</NavLink>


            </div>

            <div className="content">
                <Outlet />

            </div>
            </div>
            
    );
}