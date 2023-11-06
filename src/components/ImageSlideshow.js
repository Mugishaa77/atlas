import React, { useState, useEffect } from 'react';
import Kenya from '../maps/kenya.jpg';
import Rwanda from '../maps/rwanda.jpg';
import Tz from '../maps/tanz.jpg';
import Ug from '../maps/ug.jpg';
import './Component.css';

const imagesData = [
  Kenya, Rwanda, Tz, Ug
  
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically change the image index every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    }, 5000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const currentImage = imagesData[currentImageIndex];

  return (
    <div className="image-component">
      <div className="slideshow-container">
        <button onClick={goToPreviousImage} className="navigation-arrow prev">
          &#8592;
        </button>
        <img
          src={currentImage}
          className="slideshow-image"
           
        />
        <button onClick={goToNextImage} className="navigation-arrow next">
          &#8594;
        </button>
        <div className="image-number">
          {currentImageIndex + 1}/{imagesData.length}
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;