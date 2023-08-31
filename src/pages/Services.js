import {Link} from 'react-router-dom';

export default function Services() {
    return (
        <div className="services">
            <div className="service-header">
                {/* Content for service-header */}
            </div>
            <div className="service">
                <h2>OUR SERVICES<hr/></h2>
                <p className="open">As a specialized tea brokerage firm, we offer a comprehensive range of services 
                tailored to meet the unique needs of both tea producers and buyers:</p>
                <div className="service-table">
                    <div className="row">
                        <ul>
                            <div className="col">
                                <li>
                                    <h4>An Auction House</h4>
                                    <p>We <span>sell teas</span> at the Mombasa Tea Auction under the rules and 
                                    regulations set by the <span>East Africa Tea Trade Association (EATTA).</span><br/>
                                     Our team of experts carefully handles the entire auction process, from pre-auction
                                      preparation to post-auction follow-ups, ensuring seamless transactions and maximum
                                       returns for our producer clients.</p>
                                </li>
                                <li>
                                    <h4>Training</h4>
                                    <p>We are dedicated to securing the <span>future of the tea industry</span> by
                                     offering comprehensive <span>internship programs</span> to young workers within
                                      our company.<br/> Through these programs, participants gain invaluable expertise
                                       and hands-on experience that aligns perfectly with the demands of the tea industry.
                                       </p>
                                </li>
                            </div>
                            <div className="col">
                                <li className="net">
                                    <h4>Networking</h4>
                                    <p>In addition to <span>auction representation</span>, we also <span>facilitate
                                         private sales</span> for both producers and buyers.<br/> Our vast network of
                                          international buyers and producers allows us to connect parties directly, 
                                          enabling smooth trade negotiations.</p>
                                </li>
                                <li>
                                    <h4>Technical Support</h4>
                                    <p>For buyers seeking premium teas, we curate a diverse selection of high-quality 
                                        teas from esteemed tea gardens.<br/> Through our extensive network and market 
                                        expertise, we match buyers with teas that align with their preferences and 
                                        requirements.<br/><Link to="/garden"
                                         className="note">
                                            <em>View Garden Catalogue</em></Link></p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service-close">
                <h3>COMMITMENT TO SUSTAINABILITY<hr/></h3>
                <p>As responsible brokers, we <span>actively advocate</span> for <strong>sustainable</strong> and <strong>eco-friendly</strong> practices within the tea industry.<br/> We partner with <strong>socially
                     responsible</strong> tea gardens and buyers who share our values, supporting their efforts to promote
                      <span> sustainability</span> and <span>fair-trade practices</span>.</p>
            </div>
        </div>
    );
}

