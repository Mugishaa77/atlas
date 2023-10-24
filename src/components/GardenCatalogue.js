import ImageList from '../components/ImageList';
import Pictures from '../components/Pictures';
import './Garden.css';

export default function GardenCatalogue () {
   
    return (
        <div className="garden">
            <h2>AT A GLANCE</h2>
            <div className="pictures">
            <Pictures />
        </div>added
                    
            <div className="logos">
            <ImageList />
        </div>
        
            
            
        
            
        </div>
    );
}