import scienceOne from '../../tea/science-one.jpg';
import scienceTwo from '../../tea/science-two.jpg';
import Industry from '../../documents/Industry';
import teaProduction from '../../tea/tea-production.png';
import Footer from '../../components/Footer';
import './AboutPage.css';

export default function Science () {
    return (<div className="science">
        <div className="tbk-reports">
            <div className="i-one">
            <Industry />
            </div>
            <div className="i-two">

            </div>
        </div>
        <div className="structure">
            <h2>Tea Science</h2>
            <div className="tea-science-pics">
            <img src={scienceOne}/>
            <img src={scienceTwo}/>
            </div>

            <div className="tea-production">
                <h2>Production Statistics ~ Kenya </h2>
                <img src={teaProduction} />
                <a href="https://www.statista.com/statistics/1154187/tea-production-in-kenya/"
                rel="noopener noreferrer"
                target="_blank" ></a>

            </div>

            

    


       
            </div>
            <div>
                <Footer />
            </div>
    </div>)
}