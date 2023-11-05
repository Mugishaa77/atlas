import finlay from '../pictures/JAMES FINLAY KERICHO.jpg';
import kapchorua from '../pictures/KAPCHORUA TEA ESTATE.jpg';
import karirana from '../pictures/KARIRANA TEA ESTATE.jpg';
import kkarongi from '../pictures/karongi tea factory ltd.jpg';
import mufindi from '../pictures/MUFINDI TEA PLANTATION.jpg';
import nandi from '../pictures/NANDI TEA ESTATES.jpg';
import pfunda from '../pictures/Pfunda Tea Company.jpg';
import rubaya from '../pictures/RUBAYA TEA ESTATE.jpg';
import rwegura from '../pictures/Rwegura Tea Plantation.jpg';
import teza from '../pictures/Teza Tea Estate.jpg';
import tezaPlant from '../pictures/Teza Tea Plantation.jpg';
import eastern from '../ttea/eastern.png';
import sireet from '../ttea/sireet.png';
import kisyet from '../ttea/kisyet.png';
import nyabihu from '../ttea/nyabihu.png';
import karongi from '../ttea/karongi.png';
import gatare from '../tea/gataregatare.png';
// new



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import './Garden.css';

const plantations = [
  {image: finlay, title: 'James Finlay, Kericho'},
  {image: eastern, title: 'Eastern Produce Tea Estates, Kenya'},
   {image: kapchorua, title: 'Kapchorua Tea Estate'},
    {image: sireet, title: 'Sireet OEP estates, Nandi-Kenya'},
    {image: nyabihu, title: 'Nyabihu TeaFactory, Karago rwanda'},
    
    {image: karirana , title: 'Karirana Tea Estate'}, 
    {image: rubaya, title: 'Rubaya Tea Estate'},
  
   {image: kisyet, title: 'Kisyet Tea Limited, Kenya'},
  {image: karongi, title: 'Karongi Tea Factory, rwanda'},
 
  // new
     
      
      {image: kkarongi, title: 'Karongi Tea Factory Limited'},
      {image: mufindi, title: 'Mufindi Tea Plantation'},
      {image: nandi, title: 'Nandi Tea Estates'},
      {image: rwegura, title: 'Rwegura Tea Plantation'},
      {image: pfunda, title: 'Pfunda Tea Company'},
      
         {image:teza, title: 'Teza Estate'},
         {image: tezaPlant, title: 'Teza Tea Plantation'},
          { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda' },
 

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
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}