import './Garden.css';
import Pictures from '../components/Pictures';
import Factories from '../components/Factories';
import Plantations from '../components/Plantations';
import Footer from '../components/Footer';

export default function GardenCatalogue () {
   
    return (
        <div className="garden">
            <h2>AT A GLANCE</h2>
            <Plantations />
            <Factories />    
            <Pictures />
            <Footer />
                
            
            
        
            
        </div>
    );
}