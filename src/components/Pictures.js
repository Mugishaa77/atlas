
 

export default function Pictures() {
  
    const pictures = [
    
     
       
// factories
           
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
