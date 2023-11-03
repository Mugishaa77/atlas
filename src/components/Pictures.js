 import arroket from '../pictures/ARROKET TEA FACTORY.jpg';
import koisagat from  '../pictures/DL KOISAGAT TEA FACTORY.jpg';
import eastern from '../pictures/EASTERN PRODUCE KENYA.jpg';
import emrok from '../pictures/EMROK TEA FACTORY LTD(EPZ).jpg';
import gatare from '../pictures/GATARE TEA COMPANY LTD.jpg';
import gisakura from '../pictures/Gisakura Tea Factory.jpg';
import finlay from '../pictures/JAMES FINLAY KERICHO.jpg';
import kapchorua from '../pictures/KAPCHORUA TEA ESTATE.jpg';
import karirana from '../pictures/KARIRANA TEA ESTATE.jpg';
import karongi from '../pictures/karongi tea factory ltd.jpg';
import kibena from '../pictures/KIBENA TEA ESTATE.jpg';
import kipkebe from '../pictures/KIPKEBE TEA LTD.jpg';
import kisaru from '../pictures/KISARU TEA ESTATE.jpg';
import kitumbe from '../pictures/KITUMBE TEA FACTORY.jpg';
import korara from '../pictures/KORARA HIGHLANDS TEA FACTORY.jpg';
import maramba from '../pictures/MARAMBA TEA FACTORY.jpg';
import mata from '../pictures/MATA TEA COMPANY LTD.jpg';
import mogeni from '../pictures/MOGENI TEA FACTORY.jpg';
import mufindi from '../pictures/MUFINDI TEA PLANTATION.jpg';
import kivu from '../pictures/muganza-kivu tea factory.jpg';
import mulindi from '../pictures/MULINDI FACTORY COMPANY LTD.jpg';
import nandi from '../pictures/NANDI TEA ESTATES.jpg';
import nyabihu from '../pictures/NYABIHU TEA FACTORY.jpg';
import otb from '../pictures/OTB.jpg';
import pfunda from '../pictures/Pfunda Tea Company.jpg';
import rubaya from '../pictures/RUBAYA TEA ESTATE.jpg';
import rwegura from '../pictures/Rwegura Tea Plantation.jpg';
import sasini from '../pictures/SASINI.jpg';
import  shagasha from '../pictures/SHAGASHA TEA FACTORY.jpg';
import sorwathe from '../pictures/SORWATHE TEA FACTORY.jpg';
import sorwathePlant from '../pictures/SORWATHE TEA PLANTATION.jpg';
import teza from '../pictures/Teza Tea Estate.jpg';
import tezaPlant from '../pictures/Teza Tea Plantation.jpg';
     


export default function Pictures() {
  
    const pictures = [
      arroket, koisagat, eastern, emrok, gatare, gisakura, finlay, kapchorua,
      karirana, karongi, kibena, kipkebe, kisaru,
      kitumbe, korara, maramba, mata, mogeni, mufindi, kivu,
      mulindi, nandi, nyabihu, otb, pfunda, rubaya, rwegura,
      sasini, shagasha, sorwathe, sorwathePlant, teza, tezaPlant
    ]
  return (
    <div className="plantations">
      <div className="p">
        <ul className="grid">
          {pictures.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`Image ${index}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
