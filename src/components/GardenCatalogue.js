import Plantations from '../components/Plantations';
import ImageList from '../components/ImageList';
import Factories from '../components/Factories';
import Pictures from '../components/Pictures';
import './Garden.css';

export default function GardenCatalogue () {
   
    return (
        <div className="garden">
            <h2>AT A GLANCE</h2>
                      <div className="tea-plantations">
                <Plantations />
            </div>
            <div className="factory">
                <Factories />
            </div>
            <div className="logos">
            <ImageList />
        </div>
        <div className="pictures">
            <Pictures />
        </div>
            
            
        
            
        </div>
    );
}