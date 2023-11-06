import React, { useState, useEffect } from 'react';
import moment from 'moment'; // or your preferred date library
import './Component.css';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(moment());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time">
        <div className="empty"></div>
          <div className="full">
           
          <span className="span">
      <p className="days">{currentDateTime.format('dddd')} {currentDateTime.format('Do MMM')}</p>     </span>
      <span>
            <p className="hours">{currentDateTime.format('HH:mm')}</p>
          </span>
          </div>
    </div>
  );
}

export default DateTimeDisplay;
