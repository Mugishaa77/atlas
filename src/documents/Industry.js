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

const reportTitles = [
  { name: 'July 2023' },
  { name: 'June 2023' },
  { name: 'May 2023' },
  { name: 'April 2023' },
  { name: 'February 2023' },
  { name: 'January 2023' },
  { name: 'December 2022' },
  { name: 'November 2022' },
  { name: 'October 2022' },
  { name: 'September 2022' },
  { name: 'August 2022' },
  { name: 'July 2022' },
];


const [showButtons, setShowButtons] = useState(Array(reportTitles.length).fill(false));

  const toggleButtons = (reportIndex) => {
    const newShowButtons = [...showButtons];
    newShowButtons[reportIndex] = !newShowButtons[reportIndex];
    setShowButtons(newShowButtons);
  };
    
    return (
      <div className="industry-reports">
      <h2>Tea Industry Reports as compiled by TBK
       
      </h2>
      <div >
        <ul className="grid-container">
        {reportTitles.map((report, reportIndex) => (
          <li key={reportIndex}>
            <div className="report">
              <h5 onClick={() => toggleButtons(reportIndex)}>{report.name}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
               </h5>
              {showButtons[reportIndex] && (
                <div className="button">
                  <a
                    className="view"
                    href={performanceReports[reportIndex]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="preview document"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z"/>
</svg>
                    view
                  </a>
                  <a
                    className="download"
                    href={performanceReports[reportIndex]}
                    download
                    title="download file"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-download" viewBox="0 0 16 16">
  <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
</svg>
                    download
                    
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
