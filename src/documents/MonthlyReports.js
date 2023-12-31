import React, {useState} from 'react';
import saleThirtySix from '../excel/ATLAS Split Catalogue Post Sale 36 New Format.xlsx';
import saleThirtyFive from '../excel/ATLAS Split Catalogue Post Sale New Format 202335.xlsx';
import saleThirtyFour from '../excel/ATLAS Split Catalogue Post Sale 202334(New Format).xlsx';
import saleThirtyThree from '../excel/ATLAS Split Catalogue POST SALE 33.2023 New Format.xlsx';
import saleThirtyTwo from '../excel/ATLAS Split Catalogue POST SALE 32 New Format.xlsx';
import saleThirtyOne from '../excel/ATLAS Split Catalogue New Format POST SALE 202331(M1).xlsx';
import saleThirty from '../excel/ATLAS Split Catalogue New Format POST sale 30.xlsx';
import saleTwentyNine from '../excel/ATLAS Split Catalogue New Format post sale 29.xlsx';
import saleTwentySeven from '../excel/ATLAS POST SALE 27 (NEW FORMAT).xlsx';
import saleTwentyFive from '../excel/ATLAS CATALOGUE POST SALE 25 (NEW FORMAT).xlsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFolderOpen} from '@fortawesome/free-regular-svg-icons';

function MonthlyReports() {

  const excelFiles = [
        saleThirtySix, saleThirtyFive, saleThirtyFour, saleThirtyThree,
        saleThirtyTwo, saleThirtyOne, saleThirty, saleTwentyNine, 
        saleTwentySeven, saleTwentyFive,

  ]
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

  

// ...


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
                       <a className="download"
                         download 
                         href={excelFiles[auctionIndex]}
                           rel="noopener noreferrer"
                            title="download file"
                            >download<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                          </svg>
                            </a>

                        
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
