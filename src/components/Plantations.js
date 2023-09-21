import kibena from '../tea/kibena.png';
import livingstonia from '../tea/livingstonia.png';
import mata from '../tea/mata-tea.png';
import mulindi from '../tea/mulindi-tea.png';
import Nandi from '../tea/Nandi-tea.png';
import Rubaya from '../tea/rubaya.png';
import shagasha from '../tea/shagasha.png';
import sotik from '../tea/sotik-one.png';
import tinderet from '../tea/tinderet.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import './Garden.css';

const plantations = [
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