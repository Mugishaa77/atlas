import React, { useEffect } from 'react';
import './AboutPage.css';

export default function Profile (){
     useEffect(() => {
    document.title = 'Company Profile - Atlas Tea Brokers';
  }, []);

    return (
        <div className="profile">
            <h2>COMPANY PROFILE <hr/></h2>
        </div>
    );
}