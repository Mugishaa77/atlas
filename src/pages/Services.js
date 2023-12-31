import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Maps from '../components/Maps';

export default function Services() {  
     useEffect(() => {
    document.title = 'Services - Atlas Tea Brokers';
  }, []);

  
    return (      

        <div className="services">
            <h2>OUR SERVICES<hr/></h2>    
             <div className="service">
               
                <p className="open">As a specialized tea brokerage firm, we offer a comprehensive range of services 
                tailored to meet the unique needs of both tea producers and buyers:</p>
                <div className="service-table">
                    <div className="row">
                        <ul>
                            <div className="col">
                                <li>
                                    <h4>An Auction House</h4>
                                    
                                    <p>We sell teas at the Mombasa Tea Auction under the rules and 
                                    regulations set by the East Africa Tea Trade Association (EATTA).<br/>
                                    
                                     Our team of experts carefully handles the pre-auction
                                      preparation to post-auction follow-ups, ensuring seamless transactions and maximum
                                       returns for our producers.</p>
                                       
                                </li>

                                 <li>
                                    <h4>Technical Support</h4>
                                    <p>For producers  seeking to improve the quality of their teas, our team of experts audits factory processes to enhance
                                        and bridge any gaps.
                                        <br/>
                                        We connect buyers to the source.<br/>
                                        <Link to="/garden" title="see tea gardens" className="note">
                                            See Gardens</Link></p>
                                </li>

                               
                                
                               
                            </div>
                            
                            <div className="col">
                                 <li>
                                    <h4>Training</h4>
                                    <p>We are dedicated to securing the future of the tea industry by
                                     offering comprehensive internship programs to young people within the region.<br/> Through these programs, participants gain invaluable expertise
                                       and hands-on experience that aligns perfectly with the demands of the tea industry.
                                       </p>
                                </li>

                                  <li className="net">
                                    <h4>Networking</h4>
                                    

                                    <p>We Know Tea people and Tea places.</p>
                                          
                                </li>
                                
                               
                               
                               
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
              <Maps />   
            <div className="service-close">
                <h3>COMMITMENT TO SUSTAINABILITY<hr/></h3>
                <p>As responsible brokers, we actively advocate for <strong>sustainable</strong> and <strong>eco-friendly</strong> practices within the tea industry.<br/> We partner with <strong>socially
                     responsible</strong> tea gardens and buyers who share our values, supporting their efforts to promote
                      sustainability and fair-trade practices.</p>
            </div>
               
           
    


            
            <div className="bottom">
      <Footer />
    </div>
        </div>
    );
}

