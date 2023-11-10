import React, {useEffect} from 'react';
import scienceOne from '../../tea/science-one.jpg';
import scienceTwo from '../../tea/science-two.jpg';
import teaProduction from '../../tea/tea-production.png';
import Footer from '../../components/Footer';
import './AboutPage.css';

export default function Science () {
     useEffect(() => {
    document.title = 'Tea Science - Atlas Tea Brokers';
  }, []);

    return (<div className="science">
       
        <div className="structure">
            <h2>Tea Science<hr/></h2>
            <div className="tea-science-pics">
            <img src={scienceTwo} alt="tea-science"/>
            <img src={scienceOne} alt="tea-science"/>
            </div>

            <div className="tea-production">
                 
               
                <div className="graph">
                  
                <img src={teaProduction} alt="tea-production" />
                  
                </div>
                 <a href="https://www.statista.com/statistics/1154187/tea-production-in-kenya/"
                rel="noopener noreferrer"
                target="_blank" >
                    Read more here
                </a>
               

            </div>

            

    


       
            </div>
            <div>
                <Footer />
            </div>
    </div>)
}