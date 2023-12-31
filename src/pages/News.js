import '../News.css';
import DateTimeDisplay from '../components/DateTimeDisplay';
import audit from '../tea/aaudit.jpg';
import dollar from '../tea/dollar.jpg';
import dar from '../tea/dar-es-salaam.jpg';
import darr from '../tea/dar-auction.png';
import vat from '../tea/vat.jpg';
import React, { useState, useEffect } from 'react';


export default function News () {
   useEffect(() => {
    document.title = 'News - Atlas Tea Brokers';
  }, []);
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());
    
    useEffect(() => {
    // Update the lastUpdated value when your content changes
    // For example, when a data fetch or other updates occur
    // You can call setLastUpdated with the new date and time
    const updateLastUpdated = () => {
      setLastUpdated(new Date().toLocaleString());
    };

    // Call the updateLastUpdated function whenever your content changes
    updateLastUpdated();
    }, []);

    const newsData = [
      {
      title: "Government to scrap VAT on tea sold in factories",
      image: vat,
      source: "KBC",
      photoCredit: "Workpay",
      content: "The Agriculture ministry through the Tea Board of Kenya has developed a concept note that will positively impact stakeholders in the tea industry across the global market. Agriculture and Livestock Development Cabinet Secretary, Mithika Linturi, has said the concept note which has received approval from the National Treasury will offer tax tariffs on tea purchased from factories or tea auction centers by removing Value Added Tax (VAT) in order improve cash flows for tea exporters involved in value addition.",
      date: "Thursday 7th Dec 2023",
      link: "https://www.kbc.co.ke/govt-mulls-scrapping-vat-on-tea-sold-in-factories/#:~:text=Agriculture%20and%20Livestock%20Development%20Cabinet,flows%20for%20tea%20exporters%20involved"
    },
  {
    title: "Tanzania Exhibits great potential for global leadership in Tea Industry",
    image: 'https://theexchange.africa/wp-content/uploads/2023/11/Tanzania-tea-1024x576.webp',
    source: "The Exchange Africa",
    photoCredit: "The Exchange Africa",
    content: "Tanzania's involvement in the tea auction scene marks a significant transformation in the dynamics of the global tea trade. This positions Tanzania to leverage regional and global market prospects, enhancing the cultural and economic significance of tea in the region.As African nations venture into broader horizons, they are already making a mark on the global tea stage, with Kenya taking the lead.",
    date: "Tuesday, 21st Nov 2023",
    link: "https://theexchange.africa/industry-and-trade/tanzanias-tea-auction-african-tea/"
  },
  {
    title:"What Dar es Salaam Tea Auction means for Tanzania",
    image: darr,
    source:"The Citizen(tz)",
    photoCredit: "Kilimo Kwanza",
    content:"The Tea Board of Tanzania (TBT) director general Mary Kipeja, told the Citizen that the tea auction would make Tanzania a regional hub where neighbouring tea producing countries would be trading their produce.  Tanzanians would also be empowered economically as a result of reduced market costs and implementation of the local content agenda.",
    date:"Thursday , 16th Nov 2023",
    link:"https://www.thecitizen.co.tz/tanzania/news/business/what-today-s-first-tea-auction-in-dar-means-for-the-country--4431748"
    },
    {
    title:"Tanzania Holds it's first online Tea Auction in Dar-es-Salaam",
    image: dar,
    source:"Standard Media",
    photoCredit: "VOAG (voice of agriculture_tv)",
    content:"Tanzania intends to leverage the tea auctions by June 2024 with the goal of safeguarding the domestic market and supporting local tea producers. The inaugural tea auction, which took place on November 13th, 2023, in Dar es Salaam, is anticipated to bring about a significant transformation in the country's tea sub-sector.",
    date:"Monday, 13th Nov 2023",
    link:"https://www.standardmedia.co.ke/business/business/article/2001485446/tanzanian-direct-tea-sales-set-to-rival-mombasa-auction"
    },
    {
    title:"SCARCE DOLLAR OPENS TALKS FOR BARTER TRADE BETWEEN KENYA AND EGYPT",
    image: dollar,
    source:"Bloomberg",
    photoCredit: "Bloomberg",
    content:"Egypt asks Kenya to barter its Tea for anything produced in the North African country as a dollar shortage has impacted their ability to pay for imports. “Right now we cannot get your tea, It's lying in Mombasa because we have no dollars to pay,” Ndung'u reported the ambassador as saying, in reference to the major Kenyan port city.    “We'll get your tea and you also come and decide what you get from us.”",
    date:"Monday 6th Nov 2023",
    link:"https://www.bloomberg.com/news/articles/2023-11-06/short-of-dollars-kenya-says-egypt-asks-to-barter-for-tea#xj4y7vzkg"
    },
    {
    title:"Kenya's tea value chain under scrutiny to assess rising production costs",
    image: audit,
    source:"Nation News",
    content:"The value chain in Kenya's Tea sector is set for audit amid growing concerns over high  production costs that are cutting into farmers' earnings. Purpose of the audit is to help safeguard the interests of small shareholder farmers and gains in the industry.",
    date:"Monday 6th Nov 2023",
    link:"https://nation.africa/kenya/business/kenya-tea-value-chain-for-audit-on-high-production-costs-4424382"
    }
  // Add more news stories as needed
];

    return (
         <div className="news">
           <h2>NEWS<hr/></h2>
           <div className="time">
            <DateTimeDisplay />
           
           </div>

           <div className="stories">
           {newsData.map((story, index) => (
          <div key={index} className="story">
            <h3>{story.title}</h3>
            <h5 className="hot">{story.date}</h5>
            <div className="frame">
              <div className="new-pic">
                <img src={story.image} alt="atlas news" />
                <span>News Source: {story.source} <br />Photo Credit: {story.photoCredit}</span>
              </div>
               <div>
                {story.content.split('. ').map((sentence, i) => (
                  <p key={i}>
                    {sentence}
                     <br />
                  </p>
                ))}
              </div>
               <a
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article
              </a>
            </div>
            <hr />
          </div>
        ))}

             </div>
            <span>
             Last Updated: {lastUpdated}
           </span>
           
        </div>
    );
}