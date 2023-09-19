import React from 'react';

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

//css list
import './Garden.css';

const imageList = [
  dl,
  ddl,
  emrok,
  karirana,
  maramba,
  mcleod,
  mogeni,
  nandi,
  Rwanda,
  sasini,
  toiyoi,
  williamson,
  wood,
];

export default function ImageList() {
  return (
    <div className="image-list-container">
      <h3>List of Gardens within our Catalogue</h3>
      <ul className="image-list">
        {imageList.map((image, index) => (
          <li key={index}>
            <img src={image} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

