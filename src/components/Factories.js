import kkarirana from '../tea/karirana.png';
import mmaramba from '../tea/maramba-two.png';
import ssotik from '../tea/sotik-two.png';
import rutsiro from '../tea/rutsiro.png';
import gatare from '../tea/gatare.png';
import gggatare from '../tea/gataregatare.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import './Garden.css';

const factories = [
  { image: kkarirana, title: 'Karirana Estates Limited, Kiambu Road, Kenya - Home of Eden Tea', caption: 'Karirana Estates Limited, Kenya' },
  { image: ssotik, title: 'Sotik Tea Companies, Kenya', caption: 'Sotik Tea Companies, Nandi- Kenya' },
  { image: mmaramba, title: 'Maramba Tea Factory, Kenya - Black Tea Manufacturer', caption: 'Maramba Tea Factory, Kenya' },  
  { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda Mountain Tea, Rwanda', caption: 'Gatare Tea Company Ltd, Rwanda' },
   { image: gggatare, title: 'Gatare Tea Company Ltd, Rwanda Mountain Tea, Rwanda', caption: 'Gatare Tea Company Ltd, Rwanda' },
  { image: rutsiro, title: 'Rutsiro Tea Factory, Rwanda', caption: 'Rutsiro Tea Factory, Rwanda' },
 
    
]

export default function Factories() {
  return (
    <div className="factories">
      <h3><FontAwesomeIcon icon={faIndustry} />Processing and Packaging<hr/></h3>
      <div className="f">
      <ul className="grid">
        {factories.map((factories, index) => (
          <li key={index}>
            <img src={factories.image}
             alt={factories.title}
             title={factories.title}
             loading="lazy" />
             <p>{factories.caption}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}