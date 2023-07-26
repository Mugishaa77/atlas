import React, { useState, useEffect } from 'react';
import DLKoisagatImage from '../tea/DL-koisagat.png';
import GatareImage from '../tea/gatare.png';
import KapchoruaImage from '../tea/kapchorua.png';
import '../App.css';

const ImageSlideshow = () => {
  const images = [
    DLKoisagatImage,
    GatareImage,
    KapchoruaImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [images.length]);

  return (
    <div className="image-component">
      <img 
        src={images[currentImageIndex]}
        alt={`Slideshow Image ${currentImageIndex + 1}`}
        style={{ width: '600px', height: '400px' }}
       
      />
    </div>
  );
};

export default ImageSlideshow;
