import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pictures() {
  const backendApiUrl = process.env.REACT_APP_BASE_URL;
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    // Make a GET request to your backend API to fetch the image URLs
    axios.get(`${backendApiUrl}/api/pictures`)
      .then((response) => {
        setPictures(response.data); // Assuming your API returns an array of image URLs
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, [backendApiUrl]);

  return (
    <div className="tea-pics">
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
