import React, { useState } from 'react';

// 2022
import july from '../industry/TEA INDUSTRY PERFORMANCE JULY 2022.pdf';
import august from '../industry/TEA INDUSTRY PERFORMANCE AUGUST 2022.pdf';
import september from '../industry/TEA INDUSTRY PERFORMANCE SEPTEMBER 2022.pdf';
import october from '../industry/TEA INDUSTRY PERFORMANCE OCTOBER 2022.pdf';
import november from '../industry/TEA INDUSTRY PERFORMANCE NOVEMBER 2022.pdf';
import december from '../industry/TEA INDUSTRY PERFORMANCE DECEMBER 2022.pdf';

// 2023
import janNew from '../industry/TEA INDUSTRY PERFORMANCE JANUARY 2023.pdf';
import febNew from '../industry/TEA INDUSTRY PERFORMANCE FEBRUARY 2023.pdf';
import aprilNew from '../industry/TEA INDUSTRY PERFORMANCE APRIL 2023.pdf';
import mayNew from '../industry/TEA INDUSTRY PERFORMANCE MAY 2023.pdf';
import juneNew from '../industry/TEA INDUSTRY PERFORMANCE JUNE 2023.pdf';
import julyNew from '../industry/TEA INDUSTRY PERFORMANCE JULY 2023.pdf';
import './Industry.css';

export default function Industry () {

  const performanceReports = [ july, august, september, october, november, december,
  janNew, febNew, aprilNew, mayNew, juneNew, julyNew ];

const reportTitles = [{name: 'July 2022' },
{name: 'August 2022'}, {name: 'September 2022'}, {name: 'October 2022'}, {name: 'November 2022'},
{name: 'December 2022'}, {name: 'January 2023'}, {name: 'February 2023'}, {name: 'April 2023'}, 
{name: 'May 2023'}, {name: 'June 2023'}, {name: 'July 2023'},];

const [showButtons, setShowButtons] = useState(Array(reportTitles.length).fill(false));

  const toggleButtons = (reportIndex) => {
    const newShowButtons = [...showButtons];
    newShowButtons[reportIndex] = !newShowButtons[reportIndex];
    setShowButtons(newShowButtons);
  };
    
    return (
      <div className="industry-reports">
      <h2>Tea Industry Reports
       
      </h2>
      <div >
        <ul className="grid-container">
        {reportTitles.map((report, reportIndex) => (
          <li key={reportIndex}>
            <div className="report">
              <h5 onClick={() => toggleButtons(reportIndex)}>{report.name}
               <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
                </span></h5>
              {showButtons[reportIndex] && (
                <div className="button">
                  <a
                    className="view"
                    href={performanceReports[reportIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="preview document"
                  >
                    View
                  </a>
                  <a
                    className="download"
                    href={performanceReports[reportIndex]}
                    download
                    title="download file"
                  >
                    Download
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

        </div>
      
    </div>
     
    );
}
