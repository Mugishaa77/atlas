import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Maps from '../components/Maps';

export default function Services() {
     const [currentPage, setCurrentPage] = useState(0);

  const pages = [

    <div>
    <Maps /> </div>,
    <>
    <div className="service">
               
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
                                    
                                     Our team of experts carefully handles the pre-auction
                                      preparation to post-auction follow-ups, ensuring seamless transactions and maximum
                                       returns for our producers.</p>
                                       
                                </li>

                                 <li>
                                    <h4>Technical Support</h4>
                                    <p>For <span>producers</span> seeking to improve the quality of their teas, our team of experts audits factory processes to enhance
                                        and bridge any gaps.
                                        <br/>
                                        <span>We connect buyers to the source.</span><br/>
                                        <Link to="/garden" title="see tea gardens" className="note">
                                            See Gardens</Link></p>
                                </li>

                               
                                
                               
                            </div>
                            
                            <div className="col">
                                 <li>
                                    <h4>Training</h4>
                                    <p>We are dedicated to securing the <span>future of the tea industry</span> by
                                     offering comprehensive <span>internship programs</span> to young people within the region.<br/> Through these programs, participants gain invaluable expertise
                                       and hands-on experience that aligns perfectly with the demands of the tea industry.
                                       </p>
                                </li>

                                  <li className="net">
                                    <h4>Networking</h4>
                                    

                                    <p>We Know <span>Tea people</span> and <span>Tea places.</span></p>
                                          
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
            </div></>,
            

    

    // Add more pages as needed
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
    return (
        

        <div className="services">
            <h2>OUR SERVICES<hr/></h2>           
            <div>
                 {pages[currentPage]}
            </div>
              <div className="catalog-controls">
        <button onClick={prevPage} disabled={currentPage === 0}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg> Previous</button>
        <span>{`Page ${currentPage + 1} of ${pages.length}`}</span> {/* Displays page number */}
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
      </div>
    


            
            <div className="bottom">
      <Footer />
    </div>
        </div>
    );
}

