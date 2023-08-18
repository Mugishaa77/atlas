import Directors from '../components/Directors';
import koisagat from '../tea/DL-koisagat.png'
import '../App.css';

export default function About() {
    return (
        <div className="about">
            <h2>ABOUT ATLAS <hr /></h2>
            <div className="journey">
                <ul>
                    <div className="figures">
                        <div className="figure">
                            <li>Date of Company registration: <span className="num">2002</span></li>
                            <li>Date of admission to EATTA: <span className="num">July 2015</span></li>
                        </div>
                        <div className="figure">
                            <li>Maiden Auction: <span className="num">Sale 39 of September 2015</span></li>
                            <li>Number of Marks at the inaugural sale: <span className="num">3</span></li>
                        </div>
                        <div className="figure">
                            <li>Number of Gardens today: <span className="num">33 from 5 countries</span></li>
                            <li>Current market share: <span className="num">7%</span></li>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="about-lists">
                <div className="why-us">
                    <h3>WHY CHOOSE US ? <hr/></h3>
                    <ul>
                        <li>We <span>Know</span> the History and envision the Future</li>
                        <li>We are Elastic</li>
                        <li>We can provide answers to questions you may have <br /> about the industry</li>
                        <li>We ask the right questions</li>
                        <li>We are authentic; you will enjoy working with us</li>
                    </ul>
                    <p><em>We Know Tea</em></p>
                </div>

                <div className="koisagat">
                    <img src={koisagat} alt="Koisagat Tea Estate Ltd, Nandi Hills Kenya"
                        title="Koisagat Tea Estate Ltd, Nandi Hills Kenya"/>
                </div>
            </div>

            <div className="mission">
                <h3>OUR MISSION <hr /></h3>
                <p>
                    <span className="opening">At Atlas Tea Brokers, </span>
                    our mission is to <span className="opening">provide top-tier brokerage services</span> to both tea
                    producers and buyers, guiding them in navigating the 
                    complexities of the tea trade. <br/> With our <span className="opening"> in-depth knowledge,</span> <span className="opening">unwavering commitment,</span>
                    and <span className="opening">personalized approach,</span> we aim to ensure
                    that our clients' teas find the <span className="opening">right buyers</span> at the Mombasa Auction,
                    securing <span className="opening">maximum value</span> for our clients.
                </p>
            </div>

            <div className="directors-component">
                <Directors />
            </div>
        </div>
    );
}
