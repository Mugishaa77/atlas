import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function NotFound () {
     useEffect(() => {
    document.title = '404 Not Found - Atlas Tea Brokers';
  }, []);
    return (
        <div className="not-found">
            <h2>Page Not Found</h2>
            <Link to="/">
                Return To Homepage
            </Link>
            
        </div>
    );
}