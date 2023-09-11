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
                
                      <div className="schedule">
                      <h3>AUCTION SCHEDULE<hr/></h3>
                      <ul>
                        <li>
                            <strong>
                                Monday - M1 Auction: </strong>
                                This auction is dedicated to Main Dust Grades, including Pekoe Dust and DUST1. </li>
                                
                                <li>
                                    <strong>Tuesday - M2 Auction: </strong>
                                    The focus shifts to Main Leaf Grades on Tuesday, featuring teas like Broken Pekoe 1 (BP1)
                                    and Pekoe Fannings 1 (PF1).  </li>
                                    <li>
                                        <strong>
                                            Wednesday - Secondary Grades Auction: </strong>
                                            Wednesdays are all about Secondary Grades, where you'll find a diverse collection including BP,
                                            PF, DUST2, PF2, BMF, FNGS, FNGS1, FNGS2 and PF2.
                                             </li></ul>  
</div>
                                             

                                        
                                                 <div className="side-nav">
                <h3>
                    <strong>QUICK LINKS</strong></h3>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/auction-reports">Auction Reports</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/auction-results">Auction Results</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/auction/markets">Market Reports</NavLink>

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