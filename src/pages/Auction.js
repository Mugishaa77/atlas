import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';


export default function Auction () {
    return (
        <div className="auction">
            <h2>TEA AUCTION <hr/></h2>
           Hello visitor, the auction information is being updated from the server side. Be sure to come back soon :)
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