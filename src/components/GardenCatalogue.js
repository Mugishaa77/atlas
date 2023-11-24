import './Garden.css';
import React, {useEffect} from 'react';
import Pictures from '../components/Pictures';
import Footer from '../components/Footer';

export default function GardenCatalogue () {
     useEffect(() => {
    document.title = 'Gallery - Atlas Tea Brokers';
  }, []);
   
    return (
        <div className="garden">
            <h2>AT A GLANCE</h2>    
            <Pictures />
            <Footer />
                
            
            
        
            
        </div>
    );
}