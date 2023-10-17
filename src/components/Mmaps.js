import KKenya from '../maps/kkenya.jpg';
import RRwanda from '../maps/rrwanda.jpg';
import TTz from '../maps/ttanz.jpg';
import UUg from '../maps/uug.jpg';
import './Garden.css';

export default function Mmaps () {
    return (
        <div className="tea-mmaps">
           
            <div className="kenya-mmap">
                     <img src={KKenya}
                      alt="Atlas Tea Brokers Kenyan Map"
                      title="Atlas Tea Brokers Kenyan Map"
                      loading="lazy"/>
                </div>
                <div className="tz-mmap">
                <img src={TTz}
                 alt="Atlas Tea Brokers Tanzania Map"
                 title="Atlas Tea Brokers Tanzania Map"
                      loading="lazy"/>
               </div>
               <div className="ug-mmap">
                 <img src={UUg} alt="Atlas Tea Brokers Uganda, Burundi Map"
                 title="Atlas Tea Brokers Uganda, Burundi Map"
                      loading="lazy"/>
               </div>
               <div className="rwanda-mmap">
                <img src={RRwanda}
                 alt="Atlas Tea Brokers Rwanda Map"
                 title="Atlas Tea Brokers Rwanda Map"
                      loading="lazy"/>
               </div>

        </div>
    );
}