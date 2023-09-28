import React from 'react';
import './Garden.css';
// Import your image files here
import dl from '../tea/dl-group-logo.png';
import ddl from '../tea/DL-logo.png';
import emrok from '../tea/emrok-logo.png';
import karirana from '../tea/karirana-logo.png';
import maramba from '../tea/maramba-logo.png';
import mcleod from '../tea/mcleod.png';
import mogeni from '../tea/mogeni-logo.png';
import nandi from '../tea/nandi-tea-logo.png';
import Rwanda from '../tea/rwanda-logo.png';
import sasini from '../tea/sasini-logo.png';
import toiyoi from '../tea/toiyoi.png';
import williamson from '../tea/williamson-logo.png';
import wood from '../tea/wood-logo.png';
import mbogo from '../ttea/mbogo-logo.png';
import kkisyet from '../ttea/kisyet-logo.png';
import kkkisyet from '../ttea/kkisyet-logo.png';
import sotik from '../ttea/sotik-logo.png';
import korara from '../ttea/korara-logo.png';
import silverback from '../ttea/silverback-logo.png';
import karongi from '../ttea/karongi-logo.png';
import sorwathe from '../ttea/sorwathe-logo.png';
import muganza from '../ttea/muganza-logo.png';
import ctb from '../ttea/ctb.png';

//css list
import './Garden.css';

const imageList = [
  nandi, wood, karongi, muganza, maramba, mogeni, sasini, toiyoi, korara,
  dl,
  ddl,
  emrok, williamson,
  mcleod,
  Rwanda, silverback,
  mbogo, sotik, kkkisyet, kkisyet, 
  karirana, 
 sorwathe, ctb
];

export default function ImageList() {
  return (
    <div className="logos">
      <h3>Gardens within our Catalogue</h3>
      <ul className="grid">
        {imageList.map ((image, index) => (
          <li key={index} className="grid-item">
            <img src={image} alt="Atlas Tea Brokers Ltd" />
          </li>
        ))}
      </ul>
    </div>
  );
}

