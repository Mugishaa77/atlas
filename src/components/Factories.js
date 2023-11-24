import { useEffect } from 'react';

import './Garden.css';

const factories = [
 
  
  
  // new
 
     
   
       
    

    
]

export default function Factories() {
useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);
  return (
    <div className="factories">
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