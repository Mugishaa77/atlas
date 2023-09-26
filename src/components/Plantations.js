import kibena from '../tea/kibena.png';
import livingstonia from '../tea/livingstonia.png';
import mata from '../tea/mata-tea.png';
import mulindi from '../tea/mulindi-tea.png';
import Nandi from '../tea/Nandi-tea.png';
import Rubaya from '../tea/rubaya.png';
import shagasha from '../tea/shagasha.png';
import sotik from '../tea/sotik-one.png';
import tinderet from '../tea/tinderet.png';
import finlays from '../ttea/finlays.png';
import emrok from '../ttea/emrok-tea.png';
import eastern from '../ttea/eastern.png';
import sireet from '../ttea/sireet.png';
import kisyet from '../ttea/kisyet.png';
import nyabihu from '../ttea/nyabihu.png';
import gisovu from '../ttea/gisovu.png';
import karongi from '../ttea/karongi.png';
import burundi from '../ttea/burundi.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import './Garden.css';

const plantations = [
  {image: finlays, title: 'James Finlays Tea Estates, Kenya', caption: 'James Finlays Tea Estates, Kenya'},
  {image: emrok, title: 'Emrok Tea Estates, Kenya', caption: 'Emrok Tea Estates, Nandi-Kenya'},
  {image: eastern, title: 'Eastern Produce Tea Estates, Kenya', caption: 'Eastern Produce Tea Estate, Kenya'},
  {image: sireet, title: 'Sireet OEP estates, Nandi-Kenya', caption: 'Sireet OEP Estates, Nandi-Kenya'},
  {image: kisyet, title: 'Kisyet Tea Limited, Kenya', caption: 'Kisyet Tea Estates, Kenya'},
  {image: nyabihu, title: 'Nyabihu TeaFactory, Karago rwanda', caption: 'Nyabihu Tea Estates, Rwanda'},
  {image: gisovu, title: 'Gisovu Tea Factory, karongi, Rwanda', caption: 'Gisovu Tea Factory, Rwanda'}, 
  {image: karongi, title: 'Karongi Tea Factory, rwanda', caption: 'Karongi Tea Factory, Rwanda'},
  {image: burundi, title:'Office du the du Burundi', caption: 'Office du the du Burundi'},
  { image: livingstonia, title: 'Livingstonia Tea Garden, Rwanda', caption: 'Livingstonia Tea Estate, Rwanda' },
  { image: kibena, title: 'Kibena Tea Estate, Tanzania', caption: 'Kibena Tea Estate, Tanzania' },
  { image: mata, title: 'Mata Tea Plantation, Rwanda', caption: 'Mata Tea Plantation, Rwanda ' },
  { image: mulindi, title: 'Mulindi Tea Factory, Rwanda', caption: 'Mulindi Tea Estate, Rwanda' },
  { image: Nandi, title: 'Nandi Tea Plantation, Kenya', caption: 'Nandi Tea, Kenya' },
  { image: Rubaya, title: 'Rubaya Tea Garden, Kabaya-Rwanda ', caption: 'Rubaya Tea Estate, Rwanda' },
  { image: shagasha, title: 'Shagasha Tea Estate, Rwanda', caption: 'Shagasha Tea Estate, Rwanda' },
  { image: sotik, title: 'Sotik Tea Plantation, Kenya', caption: 'Sotik Tea Plantation, Kenya' },
  { image: tinderet, title: 'Tinderet Tea Estate, Nandi Kenya', caption: 'Tinderet Tea Estate, Kenya' },
];

export default function Plantations() {
  return (
    <div className="plantations">
  <h3> <FontAwesomeIcon icon={faSeedling} />{' '}Production and Harvesting <hr/></h3>
  <div className="p">
      <ul className="grid">
        {plantations.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} 
            title={item.title} loading="lazy"/>
            <p>{item.caption}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}