import kibena from '../tea/kibena.png';
import livingstonia from '../tea/livingstonia.png';
import mata from '../tea/mata-tea.png';
import mulindi from '../tea/mulindi-tea.png';
import Nandi from '../tea/Nandi-tea.png';
import Rubaya from '../tea/rubaya.png';
import shagasha from '../tea/shagasha.png';
import sotik from '../tea/sotik-one.png';
import tinderet from '../tea/tinderet.png';
import './Garden.css';

const plantations = [
  { image: livingstonia, title: 'Livingstonia Tea Garden', caption: 'Livingstonia Tea Estate' },
  { image: kibena, title: 'Kibena Tea Estate, Tanzania', caption: 'Kibena Tea Estate' },
  { image: mata, title: 'Mata Tea Plantation, Rwanda', caption: 'Mata Tea Plantation ' },
  { image: mulindi, title: 'Mulindi Tea Factory, Rwanda', caption: 'Mulindi Tea Estate' },
  { image: Nandi, title: 'Nandi Tea Plantation, Kenya', caption: 'Nandi Tea' },
  { image: Rubaya, title: 'Rubaya Tea Garden, Kabaya-Rwanda ', caption: 'Rubaya Tea Estate' },
  { image: shagasha, title: 'Shagasha Tea Estate, Rwanda', caption: 'Shagasha Tea Estate' },
  { image: sotik, title: 'Sotik Tea Plantation, Kenya', caption: 'Sotik Tea Plantation' },
  { image: tinderet, title: 'Tinderet Tea Estate, Nandi Kenya', caption: 'Tinderet Tea Estate' },
];

export default function Plantations() {
  return (
    <div className="plantations">
      <ul className="grid">
        {plantations.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} title={item.title} />
            <p>{item.caption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}