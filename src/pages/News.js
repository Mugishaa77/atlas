import '../News.css';
import DateTimeDisplay from '../components/DateTimeDisplay';
import audit from '../tea/aaudit.jpg';
import dollar from '../tea/dollar.jpg';
import dar from '../tea/dar-es-salaam.jpg';
import darr from '../tea/dar-auction.png';
import vat from '../tea/vat.jpg';
import Footer from "../components/Footer";
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
        title: "Tea Exports Strengthen the Shilling Against the Dollar ",
        image: "https://i.brecorder.com/primary/2024/03/2014131650873ca.jpg ",
        photoCredit: "Reuters, Business Recorder ",
        source: "Reuters, Business Recorder",
        date: "Wednesday March 20th 2024 ",
        link: "https://www.brecorder.com/news/40294576 ",
        content: "Kenya’s shilling was stable on Wednesday and was forecast to strengthen, helped by dollar inflows from tea exporters and diaspora remittances - said Traders from Nairobi. At 0823 GMT, commercial banks quoted the shilling at 132.00/133.00 per dollar, unchanged from Tuesday's closing rate. The shilling's current level puts it close to a one-year high, having last bid at 132.00 per dollar on March 30, 2023, according to LSEG data."
      },
      {
        title: "Bonus Earnings for Mount Kenya Tea Farmers",
        image: "https://justea.com/cdn/shop/files/Copy-of-IMG_9419.jpg?v=1642031438&width=5000",
        photoCredit: "JUSTEA",
        source: "Standard Media",
        date: "Wednesday March 20th 2024",
        link: "https://www.standardmedia.co.ke/central/article/2001491826/tea-growers-eye-mini-bonus-at-the-end-of-the-month",
        content: "Tea growers in the Mount Kenya region are set to receive a boost with the approval of mini-bonuses by factory boards. These bonuses, ranging from Sh5 to Sh12 per kilogram of processed tea, are slated to be paid alongside the March monthly payments. The approval, endorsed recently, will particularly benefit farmers in Murang’a and Kirinyaga counties, with some factories increasing payments to Sh25 per kilogram of green leaf. This decision, aimed at supporting tea farmers, was welcomed positively by various factory representatives, signaling a potential improvement in growers' earnings.",
      },
      {title: "Increase in Tea Earnings over the past year",
    image:"https://www.kenyanews.go.ke/wp-content/uploads/2024/03/teas-3.jpg",
  source: "kenyanews.go.ke",
photoCredit: "Kenya News",
content: "In 2023, Kenya's tea industry made history by achieving its highest-ever export earnings of Kshs 180.57 billion, a significant leap from previous years. This success was driven by strong production volumes, stable prices, and a favorable exchange rate to the US dollar. Deputy President Rigathi Gachagua affirmed the government's commitment to implementing reforms to boost competitiveness and increase returns for tea growers. Plans are underway to enhance value addition in the sector, with a target of increasing the proportion of value-added tea exports from 5 percent in 2023 to 50 percent by 2027, aiming to enhance export earnings and create job opportunities.",
date: "Friday March 1st 2024",
link: "https://www.kenyanews.go.ke/tea-earnings-post-better-returns-last-year/"},
      {title: "Concerns over unsold tea at Auction",
    image: "https://b1156533.smushcdn.com/1156533/wp-content/uploads/2019/02/tea-auction-sampling.jpg?lossy=2&strip=1&webp=1",
  source: "Business Daily",
photoCredit: "Food Business Africa",
content: "In 2023, a significant amount of tea, about 40% of stocks at the Mombasa auction, remained unsold due to high reserve prices and poor quality - this resulted in lower absorption rates compared to previous years. The drop in prices, particularly for the Kenya Tea Development Agency (KTDA) teas, led to calls for the removal of the reserve price regulations to address unsold tea stocks and enhance competitiveness in the global market. Despite challenges, smallholder tea factories delivering good to best quality teas fetched higher prices, while the government considers repealing price control regulations to address the issue.",
date: "Friday March 1st 2024",
link: "https://www.businessdailyafrica.com/bd/markets/commodities/unsold-tea-stocks-auction-hit-40pc-on-price-quality-concerns--4541312",
},
{
  title: "Surge in Kenyan Tea Exports ",
  image: "https://i0.wp.com/newsroom.maudhui.co.ke/wp-content/uploads/2024/02/Tea-Williamson.jpg?resize=800%2C445&ssl=1 ",
  source: "Maudhui House ",
  photoCredit: "Maudhui House ",
  content: "Kenya's tea industry witnessed a significant boost in export value, rising by 31% or Kes42.48 billion between 2022 and 2023, as revealed by the Kenya Tea Industry Performance Report of 2023. This surge was fueled by increased export volumes and stable prices, leading to a rise in tea export earnings to Kes180.57 billion, up from Kes138.09 billion the previous year. Despite a slight decrease in export prices in dollar terms, favorable exchange rates contributed to a higher unit price of Kes345.32, with Kenyan tea being exported to 92 destinations, including traditional markets like Pakistan, Egypt, UK, and UAE. ",
  date: "Thurday 29th February 2024",
  link: "https://newsroom.maudhui.co.ke/markets/2024/tea-exports-up-31-in-export-value-on-strong-dollar/ ",
},
{
  title: "In Kenya: Lipton Tea Innovation and Technology Academy ",
  image: "https://kabianga.ac.ke/sites/default/files/UoK%20Newsletters/UoK_Newsletter_Vol_8.png ",
  source: "The Smith School ",
  photoCredit: "Google Search Result ",
  content: "The Government of Kenya, LIPTON Teas and Infusions, and the University of Kabianga have jointly established the Lipton Tea Innovation & Technology Academy to enhance tea quality and sustainable practices. With an annual intake of 3000 students, including a focus on women's education and empowerment, the academy aims to elevate Kenya's position as a global hub for tea expertise and innovation. Courses are set to begin towards the end of the year, offering specialized training from vocational levels to PhD, contributing to the socio-economic transformation of the tea sector. ",
  date: "Monday 26th February 2024 ",
  link: "https://www.smithschool.ox.ac.uk/news/worlds-first-higher-education-institution-dedicated-tea-opens-kenya "
},
      {
        title: "Good news for Kenya Tea Exports",
        image: "https://s.wsj.net/public/resources/images/BN-SI611_kenyat_M_20170303145317.jpg",
        source: "The East African",
        photoCredit: "The Wall Street Journal",
        content: "Our friends in Tanzania deserve thanks for discussing this issue with us during the EAC meeting in Arusha. \"We\'re grateful,\" said Trade Principal Secretary Ombudo K\'Ombudo on his social media page.",
        date:"Friday February 16th 2024",
        link: "https://www.theeastafrican.co.ke/tea/business/boost-for-kenya-tea-exporters-as-tanzania-lifts-imports-ban-4527012"


    
      },
      {
        title: "Unleashing the Potential: How a Stable Supply Chain Can Maximize Revenue from Kenya's Tea",
        image: "https://www.businessdailyafrica.com/resource/image/4082208/landscape_ratio16x9/1160/652/1287bbb94ed3b1d73f0b3ebf72233960/xW/tea.jpg",
        source: "Business Daily",
        photoCredit: "Business Daily(NMG)",
        content: "Kenya ranks third globally in tea production, a source of national pride that must be safeguarded by ensuring the security of its supply chain. The stability of this chain directly influences the tea sector's economic potential, but with the right interventions, sustainability and value creation can be enhanced. Challenges to the supply chain include unpredictable weather, fluctuating tea prices, high production costs, logistics hurdles, and market access issues. Despite being a major tea exporter, Kenya faces the impact of a reserve price stipulation at auctions, resulting in high levels of unsold tea, indicating the need for effective solutions to secure farmers' incomes and the industry's future.",
        date: "Wednesday January 31st 2024",
        link: "https://www.businessdailyafrica.com/bd/opinion-analysis/columnists/how-a-stable-supply-chain-can-cash-from-kenya-s-tea--4508376"

      },
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
    },
    
    




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
            <span className="update">
             Last Updated: {lastUpdated}
           </span>
            <div className="bottom">
        <Footer />
      </div>
           
        </div>
    );
}