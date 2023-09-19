import kkarirana from '../tea/karirana.png';
import kipkebe from '../tea/kipkebe.png';
import mmaramba from '../tea/maramba-two.png';
import ssotik from '../tea/sotik-two.png';
import rutsiro from '../tea/rutsiro.png';
import gatare from '../tea/gatare.png';
import ggatare from '../tea/ggatare.png';
import gggatare from '../tea/gataregatare.png';
import './Garden.css';

const factories = [
     kkarirana,
      ssotik,
     mmaramba,
     kipkebe,
     gatare,
     ggatare,
     gggatare,
     
]

export default function Factories() {
  return (
    <div className="factories">
      <ul className="ggrid">
        {factories.map((factories, index) => (
          <li key={index}>
            <img src={factories} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}