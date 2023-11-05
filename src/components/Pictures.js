import koisagat from  '../pictures/DL KOISAGAT TEA FACTORY.jpg';
import emrok from '../pictures/EMROK TEA FACTORY LTD(EPZ).jpg';
import gatare from '../pictures/GATARE TEA COMPANY LTD.jpg';
import gisakura from '../pictures/Gisakura Tea Factory.jpg';
import kipkebe from '../pictures/KIPKEBE TEA LTD.jpg';
import kisaru from '../pictures/KISARU TEA ESTATE.jpg';
import kitumbe from '../pictures/KITUMBE TEA FACTORY.jpg';
import korara from '../pictures/KORARA HIGHLANDS TEA FACTORY.jpg';
import maramba from '../pictures/MARAMBA TEA FACTORY.jpg';
import mata from '../pictures/MATA TEA COMPANY LTD.jpg';
import mogeni from '../pictures/MOGENI TEA FACTORY.jpg';
import kivu from '../pictures/muganza-kivu tea factory.jpg';
import mulindi from '../pictures/MULINDI FACTORY COMPANY LTD.jpg';
import nyabihu from '../pictures/NYABIHU TEA FACTORY.jpg';
import otb from '../pictures/OTB.jpg';
import sasini from '../pictures/SASINI.jpg';
import  shagasha from '../pictures/SHAGASHA TEA FACTORY.jpg';
import sorwathe from '../pictures/SORWATHE TEA FACTORY.jpg';

 

export default function Pictures() {
  
    const pictures = [
    
     
       
// factories
           {image:sasini, title: 'Sasini' },
      {image: shagasha, title: 'Shagasha Tea Factory' },
      {image: sorwathe, title: 'Sorwathe Tea Factory'},
      {image: nyabihu, title: 'Nyabihu Tea Factory'},
      {image: kivu, title: 'Muganza-Kivu Tea Factory'},
      {image: mulindi, title: 'Mulindi Factory Company Ltd'},
      {image: otb, title: 'OTB'},
       {image: kipkebe, title: 'Kipkebe Tea Ltd'},
      {image: kisaru, title: 'Kisaru Tea Estate'},
      {image: kitumbe, title: 'Kitumbe Tea Factory'},
      {image: korara, title: 'Korara Highlands Tea Factory'},
      {image: maramba, title: 'Maramba Tea Factory'},
      {image: mata, title: 'Mata Tea Company Ltd'},
      {image: mogeni, title: 'Mogeni Tea Factory'},
      {image: koisagat, title: 'DL Koisagat Tea Factory' },
      {image: emrok, title: 'Emrok Tea Factory (EPZ)'},
       {image: gatare, title: 'Gatare Tea Company Ltd'},
       {image:gisakura, title: 'Gisakura Tea Factory'},
    
    ]
  return (
    <div className="plantations">
      <div className="p">
        <ul className="grid">
          {pictures.map((item, index) => (
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
