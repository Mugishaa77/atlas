import React, { useState } from 'react';
import MonthlyReports from './MonthlyReports';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen} from '@fortawesome/free-regular-svg-icons';
import './Catalog.css';

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <div><MonthlyReports /></div>,
    <div className="last-year">
  <h4>2022</h4>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> December</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> November</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> October</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> September</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> August</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> July</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> June</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> May</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
    <li><h5><FontAwesomeIcon icon={faFolderOpen} /> April</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> March</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> February</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> January</h5></li></ul>
  </div>
</div>
,
<div className="last-year">
  <h4>2021</h4>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> December</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> November</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> October</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> September</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> August</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> July</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> June</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> May</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
    <li><h5><FontAwesomeIcon icon={faFolderOpen} /> April</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} />March</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> February</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> January</h5></li></ul>
  </div>
</div>,
<div className="last-year">
  <h4>2020</h4>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> December</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> November</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> October</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> September</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> August</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> July</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> June</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> May</h5></li>
    </ul>
  </div>
  <div className="month-list">
    <ul>
    <li><h5><FontAwesomeIcon icon={faFolderOpen} /> April</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> March</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> February</h5></li>
      <li><h5><FontAwesomeIcon icon={faFolderOpen} /> January</h5></li></ul>
  </div>
</div>
  
    

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
