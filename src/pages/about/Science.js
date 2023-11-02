import scienceOne from '../../tea/science-one.jpg';
import scienceTwo from '../../tea/science-two.jpg';
import Industry from '../../documents/Industry';
import teaProduction from '../../tea/tea-production.png';
import Footer from '../../components/Footer';
import tbk from '../../tea/tbk.png';
import './AboutPage.css';

export default function Science () {
    return (<div className="science">
        <div className="tbk-reports">
            <div className="i-one">
            <Industry />
            </div>
            <div className="i-two">
                <h4>Reports Compiled By:</h4>
                <a href="https://www.teaboard.or.ke/"
      target="_blank"
      rel="noopener noreferrer">
        <img src={tbk}
        alt="Tea Board of Kenya"
        className="tbk"
        title="Tea Board of Kenya" />
      </a>

            </div>
        </div>
        <div className="structure">
            <h2>Tea Science</h2>
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