import mmaramba from '../tea/maramba-two.png';
import ssotik from '../tea/sotik-two.png';
import rutsiro from '../tea/rutsiro.png';
import gatare from '../tea/gatare.png';
import gggatare from '../tea/gataregatare.png';
import mogeni from '../ttea/mogeni-ltd.png';
import mbogo from '../ttea/mbogo-valley.png';
import karirana from '../ttea/karirana-factory.png';
import maramba from '../ttea/maramba-tea.png';
import sorwathe from '../ttea/sorwathe.png';
import pfunda from '../ttea/pfunda.png';
import mulindii from '../ttea/mulindi-factory.png';
import kisaru from '../ttea/kisaru-f.png';
import teza from '../ttea/teza.png';
import koisagat from '../ttea/Koisagat.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import './Garden.css';

const factories = [
{ image: koisagat, title: 'DL-Koisagat Tea Estate Ltd,Kenya', caption: 'DL Koisagat Tea Estate Ltd, Kenya' },
{ image: gggatare, title: 'Gatare Tea Company Ltd, Rwanda Mountain Tea, Rwanda', caption: 'Gatare Tea Company Ltd, Rwanda' },
   {image: pfunda, title: 'Pfunda Tea Company, Rubavu, Rwanda', caption: 'Pfunda Tea Company, Rwanda'},
    
 {image: mulindii, title: 'Mulindi Factory Company- The Wood Foundation, Rwanda', caption: 'Mulindi Tea Factory, Rwanda'},
  {image: maramba, title: 'Maramba Tea Factrory, Limuru/Banana Road', caption: 'Maramba Tea Factory, Kenya'},
  {image: kisaru, title:'Kisaru Tea Factory, Uganda', caption: 'Kisaru Tea Factory, Uganda'},
  {image: sorwathe, title: 'Sorwathe Tea Factory, Kinihira, Rwanda', caption: 'Sorwathe Tea Factory, Rwanda'},
  { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda Mountain Tea, Rwanda', caption: 'Gatare Tea Company Ltd, Rwanda' },
  { image: ssotik, title: 'Sotik Tea Companies, Kenya', caption: 'Sotik Tea Companies, Nandi- Kenya' },
  { image: rutsiro, title: 'Rutsiro Tea Factory, Rwanda', caption: 'Rutsiro Tea Factory, Rwanda' },
  { image: mmaramba, title: 'Maramba Tea Factory, Kenya - Black Tea Manufacturer', caption: 'Maramba Tea Factory, Kenya' },  
  {image: teza, title: 'Teza Tea Factory, Burundi', caption: 'Teza Tea Factory, Burundi'},
  {image: mbogo, title: 'Mbogo Valley Tea Factory, Kenya', caption: 'Mbogo Valley Tea Factory, Kenya'},
  {image: mogeni, title: 'Mogeni Tea Factory, Ikonge - Kenya', caption: 'Mogeni Tea Factory, Kenya'},
  {image: karirana, title: 'Karirana Estates Limited, Kiambu Road, Kenya - Home of Eden Tea', caption:'Karirana Tea Factory, Kenya'},
  
 
    
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