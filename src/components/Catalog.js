import React, { useState } from 'react';
import './Catalog.css';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <div className="latest-report">
        <h4> 2023 </h4>
        <ul>
            <li>
                <h5>September</h5>
            <div className="month">
                <ul>
                    <li>
                        Auction 36
                        
    
                        </li></ul></div></li>
            <li><h5>August</h5>
            <div className="month">
                <ul>
                    <li>Auction 35</li>
                    <li>Auction 34</li>
                    <li>Auction 33</li>
                    <li>Auction 32</li>
                    <li>Auction 31</li>
                </ul>
            </div>
            </li>
            <li><h5>July</h5>
            <div className="month">
                <ul>
                    <li>Auction 30</li>
                    <li>Auction 29</li>
                    <li>Auction 28</li>
                    <li>Auction 27</li></ul></div></li>
            <li><h5>June</h5>
            <div className="month">
                <ul>
                    <li>Auction 26</li>
                    <li>Auction 25</li>
                </ul>
            </div>
           </li>
            

        </ul>
        </div>,
    <div>Page 2 Content</div>,
    <div>Page 3 Content</div>,
    <div>Page 4 Content</div>
    // Add more pages as needed
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="catalog-container">
      <div className="catalog-page">
        {pages[currentPage]}
      </div>
      <div className="catalog-controls">
        <button onClick={prevPage} disabled={currentPage === 0}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg> Previous</button>
        <span>{`Page ${currentPage + 1} of ${pages.length}`}</span> {/* Displays page number */}
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Next <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
      </div>
    </div>
  );
};

export default Catalog;
