import toiyoi from '../tea/toiyoi.png';
import mcleod from '../tea/mcleod.png';
import finlays from '../tea/finlays.png';
import dl from '../tea/dl-group-logo.png';
import dllogo from '../tea/DL-logo.png';
import emrok from '../tea/emrok-logo.png';
import karirana from '../tea/karirana-logo.png';
import maramba from '../tea/maramba-logo.png';
import mogeni from '../tea/mogeni-logo.png';
import nandi from '../tea/nandi-tea-logo.png';
import rwanda from '../tea/rwanda-logo.png';
import wood from '../tea/wood-logo.png';

import './Component.css';

const logos = [
toiyoi, mcleod, finlays, dl, dllogo, emrok, karirana, 
maramba, mogeni, nandi, rwanda, wood, mbogo, kkisyet, 
kkkisyet, sotik, korara, silverback, karongi, sorwathe,
muganza, ctb
]
export default function Logos () {
    return (
        <div className="logos">
<ul className="grid">
        {logos.map((logos, index) => (
          <li key={index}>
            <img src={logos}
            alt=""
             loading="lazy" />
           
          </li>
        ))}
      </ul>

        </div>
    );
}