import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFolderOpen} from '@fortawesome/free-regular-svg-icons';

function MonthlyReports() {
  const [openMonth, setOpenMonth] = useState(null);

  const toggleMonth = (month) => {
    if (openMonth === month) {
      setOpenMonth(null);
    } else {
      setOpenMonth(month);
    }
  };

  const months = [
    {
      name: 'September',
      auctions: ['Auction 36'],
    },
    {
      name: 'August',
      auctions: ['Auction 35', 'Auction 34', 'Auction 33', 'Auction 32', 'Auction 31'],
    },
    {
      name: 'July',
      auctions: ['Auction 30', 'Auction 29', 'Auction 28', 'Auction 27'],
    },
    {
      name: 'June',
      auctions: ['Auction 26', 'Auction 25'],
    },
  ];

  return (
    <div className="latest-report">
      <h4>2023</h4>
      <ul>
        {months.map((month, index) => (
          <li key={index}>
            <h5 onClick={() => toggleMonth(index)}><FontAwesomeIcon icon={faFolderOpen} /> {month.name}</h5>
            {openMonth === index && (
              <div className="month">
                <ul>
                  {month.auctions.map((auction, auctionIndex) => (
                    <li key={auctionIndex}>
                     <>{auction} <FontAwesomeIcon icon={faFileExcel} /></> 
                      <div className="button">
                        <button className="view" title="preview document">View</button>
                        <button className="download" title="download file">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthlyReports;
