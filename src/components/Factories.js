import gatare from '../tea/gatare.png';
import mbogo from '../ttea/mbogo-valley.png';
import pfunda from '../ttea/pfunda.png';
import mulindii from '../ttea/mulindi-factory.png';
import kisaru from '../ttea/kisaru-f.png';
import koisagat from '../ttea/Koisagat.png';
// new
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
import sasini from '../pictures/SASINI.jpg';
import  shagasha from '../pictures/SHAGASHA TEA FACTORY.jpg';
import sorwathe from '../pictures/SORWATHE TEA FACTORY.jpg';

import './Garden.css';

const factories = [
{ image: koisagat, title: 'DL-Koisagat Tea Estate Ltd,Kenya' },
   {image: pfunda, title: 'Pfunda Tea Company, Rwanda'}, 
    {image:sasini, title: 'Sasini' },   
 {image: mulindii, title: 'Mulindi Tea Factory, Rwanda'},
  {image: kivu, title: 'Muganza-Kivu Tea Factory'},
  {image: kisaru, title:'Kisaru Tea Factory, Uganda'},
       {image: mulindi, title: 'Mulindi Factory Company Ltd'},
  {image: sorwathe, title: 'Sorwathe Tea Factory'},
     {image: korara, title: 'Korara Highlands Tea Factory'},   
  {image: mbogo, title: 'Mbogo Valley Tea Factory, Kenya'},
  { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda' },
  // new
 
      {image: shagasha, title: 'Shagasha Tea Factory' },
     
       {image: kipkebe, title: 'Kipkebe Tea Ltd'},
      {image: kkisaru, title: 'Kisaru Tea Estate'},
      {image: kitumbe, title: 'Kitumbe Tea Factory'},
      
      {image: maramba, title: 'Maramba Tea Factory'},
      {image: mata, title: 'Mata Tea Company Ltd'},
      {image: mogeni, title: 'Mogeni Tea Factory'},
      {image: emrok, title: 'Emrok Tea Factory (EPZ)'},
       {image:gisakura, title: 'Gisakura Tea Factory'},
        {image: otb, title: 'OTB'},
    

    
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
             <p>{factories.title}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}