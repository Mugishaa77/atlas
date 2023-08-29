import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';


export default function Auction () {
    return (
        <div className="auction">
            <h2>TEA AUCTION <hr/></h2>

            <div className="side-nav">
                <h3>
                    <strong>QUICK LINKS</strong></h3>
                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/">Auction Reports</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/">Auction Results</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/">Market Reports</NavLink>

                <NavLink className={({ isActive }) =>
                isActive ? "link-active" : "link-inactive"
            }
                to ="/">Forthcoming Auctions</NavLink>


            </div>

            <div className="content">
                <Outlet />

            </div>
        </div>
    );
}