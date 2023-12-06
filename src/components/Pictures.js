import {useEffect} from 'react';

import finlay from '../pictures/JAMES FINLAY KERICHO.jpg';
import kapchorua from '../pictures/KAPCHORUA TEA ESTATE.jpg';
import karirana from '../pictures/KARIRANA TEA ESTATE.jpg';
import karongi from '../pictures/karongi tea factory ltd.jpg';
import mufindi from '../pictures/MUFINDI TEA PLANTATION.jpg';
import nandi from '../pictures/NANDI TEA ESTATES.jpg';
import pfunda from '../pictures/Pfunda Tea Company.jpg';
import rubaya from '../pictures/RUBAYA TEA ESTATE.jpg';
import rwegura from '../pictures/Rwegura Tea Plantation.jpg';
import teza from '../pictures/Teza Tea Estate.jpg';
import tezaPlant from '../pictures/Teza Tea Plantation.jpg';
import eastern from '../ttea/eastern.png';
import sireet from '../ttea/sireet.png';
import gatare from '../tea/gataregatare.png';
import ggatare from '../tea/gatare.png';
import mbogo from '../ttea/mbogo-valley.png';
import ppfunda from '../ttea/pfunda.png';
import koisagat from '../ttea/Koisagat.png';
import emrok from '../pictures/EMROK TEA FACTORY LTD(EPZ).jpg';
import gisakura from '../pictures/Gisakura Tea Factory.jpg';
import kipkebe from '../pictures/KIPKEBE TEA LTD.jpg';
import kkisaru from '../pictures/KISARU TEA ESTATE.jpg';
import kitumbe from '../pictures/KITUMBE TEA FACTORY.jpg';
import korara from '../pictures/KORARA HIGHLANDS TEA FACTORY.jpg';
import maramba from '../pictures/MARAMBA TEA FACTORY.jpg';
import mata from '../pictures/MATA TEA COMPANY LTD.jpg';
import mogeni from '../pictures/MOGENI TEA FACTORY.jpg';
import kivu from '../pictures/muganza-kivu tea factory.jpg';
import mulindi from '../pictures/MULINDI FACTORY COMPANY LTD.jpg';
import otb from '../pictures/OTB.jpg';
import  shagasha from '../pictures/SHAGASHA TEA FACTORY.jpg';
import sorwathe from '../pictures/SORWATHE TEA FACTORY.jpg';
 

export default function Pictures() {
   useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  // ... (import statements)

const teaData = [
  {
    country: 'Kenya',
    factories: [
      { image: finlay, title: 'James Finlay, Kericho' },
      { image: sireet, title: 'Sireet OEP estates, Nandi-Kenya' },
      { image: eastern, title: 'Eastern Produce Tea Estates, Kenya' },
        { image: kapchorua, title: 'Kapchorua Tea Estate' },
         { image: kipkebe, title: 'Kipkebe Tea Ltd' },
         { image: karirana, title: 'Karirana Tea Estate' },
      { image: koisagat, title: 'DL-Koisagat Tea Estate Ltd, Kenya' },
        { image: nandi, title: 'Nandi Tea Estates' },
       { image: emrok, title: 'Emrok Tea Factory (EPZ)' },
      { image: mogeni, title: 'Mogeni Tea Factory' },
      { image: mbogo, title: 'Mbogo Valley Tea Factory, Kenya' },
      { image: korara, title: 'Korara Highlands Tea Factory' },
     { image: maramba, title: 'Maramba Tea Factory' },
      { image: kitumbe, title: 'Kitumbe Tea Factory' },
     
    ],
  },
  
  {
    country: 'Rwanda',
    factories: [
       { image: rubaya, title: 'Rubaya Tea Estate' },
      { image: sorwathe, title: 'Sorwathe Tea Factory' },
      
      { image: ppfunda, title: 'Pfunda Tea Company, Rwanda' },
        { image: mulindi, title: 'Mulindi Tea Company Ltd' },
        { image: pfunda, title: 'Pfunda Tea Company' },
          { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda' },
            { image: karongi, title: 'Karongi Tea Factory Limited' },    
     { image: kivu, title: 'Muganza-Kivu Tea Factory' },       
      { image: shagasha, title: 'Shagasha Tea Factory' },
       { image: gisakura, title: 'Gisakura Tea Factory' },
      { image: mata, title: 'Mata Tea Company Ltd' },
      { image: ggatare, title: 'Gatare Tea Company Ltd, Rwanda' },
    
    
    
    ],
  },
   {
    country: 'Burundi',
    factories: [
      { image: rwegura, title: 'Rwegura Tea Plantation' },
       { image: otb, title: 'Office du the Burundi' },
         { image: tezaPlant, title: 'Teza Tea Plantation' },
        { image: teza, title: 'Teza Estate' },
      
    ]
  },
  {
    country: 'Uganda',
    factories: [
     
      { image: kkisaru, title: 'Kisaru Tea Factory, Uganda' },
    ],
  },
  {
    country: 'Tanzania',
    factories: [{ image: mufindi, title: 'Mufindi Tea Plantation' }],
  },
 
 
];

// Example usage:
console.log(teaData);


  
  return (
    <div className="plantations">
   {teaData.map((countryData, index) => (
  <div key={index}>
    <h3>{countryData.country}</h3>
    <ul className="grid">
      {countryData.factories.map((factory, factoryIndex) => (
        <li key={factoryIndex}>
          {/* Use a placeholder for the image if it doesn't exist */}
          {factory.image && (
            <img src={factory.image} alt={factory.title} title={factory.title} loading="lazy" />
          )}
          <p>{factory.title}</p>
        </li>
      ))}
    </ul>
  </div>
))}



       
       
    
       </div>
  );
}
