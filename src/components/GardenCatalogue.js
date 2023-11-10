import './Garden.css';
import React, {useEffect} from 'react';
import Pictures from '../components/Pictures';
import Factories from '../components/Factories';
import Plantations from '../components/Plantations';
import Footer from '../components/Footer';

export default function GardenCatalogue () {
     useEffect(() => {
    document.title = 'Gallery - Atlas Tea Brokers';
  }, []);
   
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