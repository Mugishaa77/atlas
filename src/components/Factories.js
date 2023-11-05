import gatare from '../tea/gatare.png';

import mbogo from '../ttea/mbogo-valley.png';
import maramba from '../ttea/maramba-tea.png';
import sorwathe from '../ttea/sorwathe.png';
import pfunda from '../ttea/pfunda.png';
import mulindii from '../ttea/mulindi-factory.png';
import kisaru from '../ttea/kisaru-f.png';
import koisagat from '../ttea/Koisagat.png';
import './Garden.css';

const factories = [
{ image: koisagat, title: 'DL-Koisagat Tea Estate Ltd,Kenya', caption: 'DL Koisagat Tea Estate Ltd, Kenya' },

   {image: pfunda, title: 'Pfunda Tea Company, Rubavu, Rwanda', caption: 'Pfunda Tea Company, Rwanda'},
    
 {image: mulindii, title: 'Mulindi Factory Company- The Wood Foundation, Rwanda', caption: 'Mulindi Tea Factory, Rwanda'},
  {image: maramba, title: 'Maramba Tea Factrory, Limuru/Banana Road', caption: 'Maramba Tea Factory, Kenya'},
  {image: kisaru, title:'Kisaru Tea Factory, Uganda', caption: 'Kisaru Tea Factory, Uganda'},
  {image: sorwathe, title: 'Sorwathe Tea Factory, Kinihira, Rwanda', caption: 'Sorwathe Tea Factory, Rwanda'},
  { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda Mountain Tea, Rwanda', caption: 'Gatare Tea Company Ltd, Rwanda' },
  {image: mbogo, title: 'Mbogo Valley Tea Factory, Kenya', caption: 'Mbogo Valley Tea Factory, Kenya'},

    
]

export default function Factories() {
  return (
    <div className="factories">
      <h3>Processing and Packaging<hr/></h3>
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