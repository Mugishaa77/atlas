import Kenya from '../maps/kenya.jpg';
import Rwanda from '../maps/rwanda.jpg';
import Tz from '../maps/tanz.jpg';
import Ug from '../maps/ug.jpg';
import './Garden.css';

export default function Maps () {
    return (
        
        <div className="tea-maps">
           
            <div className="kenya-map">
                     <img src={Kenya}
                      alt="Atlas Tea Brokers Kenyan Map"
                      title="Atlas Tea Brokers Kenyan Map"
                      loading="lazy"/>
                </div>
                <div className="tz-map">
                <img src={Tz}
                 alt="Atlas Tea Brokers Tanzania Map"
                 title="Atlas Tea Brokers Tanzania Map"
                      loading="lazy"/>
               </div>

                <div className="ug-map">
                 <img src={Ug} alt="Atlas Tea Brokers Uganda, Burundi Map"
                 title="Atlas Tea Brokers Uganda, Burundi Map"
                      loading="lazy"/>
               </div>
               <div className="rwanda-map">
                <img src={Rwanda}
                 alt="Atlas Tea Brokers Rwanda Map"
                 title="Atlas Tea Brokers Rwanda Map"
                      loading="lazy"/>
               </div>
              
        </div>
        

        
    );
}