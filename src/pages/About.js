
import '../App.css';

export default function About () {
    return (
        <div className="about">
            <h2>ABOUT ATLAS  <hr /></h2>
            <div className="about-one">
                <h3> OUR JOURNEY IN NUMBERS <hr /></h3>
                <ul className="list-container">
                    <li>Date of Company registration: <span className="num"> 2002</span> </li>

<li>Date of admission to EATTA: <span className="num"> July 2015</span> </li>

<li>Maiden Auction: <span className="num"> Sale 39 of September 2015</span> </li>

<li>Number of Marks at the inaugural sale: <span className="num"> 3</span></li>

<li>Number of Gardens today: <span className="num"> 24 from 3 countries</span></li>

<li>Current market share: <span className="num"> 5%</span> </li>
                </ul>
            </div>
           
            <div className="mission">
            <h3>OUR MISSION <hr /></h3>
            {/* h3s should be greeen */}
            <p>
                <span className="opening">At Atlas Tea Brokers, </span>
                     our mission is to <span className="opening">provide top-tier brokerage services</span> to both tea
producers and buyers, guiding them in navigating the complexities of the tea trade. <br/> With our
<span className="opening"> in-depth knowledge,</span> <span className="opening">unwavering commitment,</span> and <span className="opening">personalized approach,</span> we aim to ensure
that our clients' teas find the <span className="opening">right buyers</span> at the Mombasa Auction, securing <span className="opening">optimal prices </span>
 for producers and premium products for buyers.
            </p>
           </div>

           <div className="service">
            <h3>WHAT WE DO<hr/></h3>
            <p className="open">As a specialized tea brokerage firm, we offer a comprehensive range of services tailored to
meet the unique needs of both tea producers and buyers:</p>

<ul>
    <li>
    <h4>Auction Representation for Producers</h4>
    <p>We <span>sell teas </span> at the Mombasa Tea Auction <br/>under the rules and regulations set by
EATTA on behalf of our tea producer clients.
 Our team of experts carefully handles
the entire auction process, from pre-auction preparation to post-auction follow-ups,
ensuring seamless transactions and maximum returns for our producer clients.</p></li>


<li>
    <h4>
        Sourcing for Buyers</h4>
        <p>For buyers seeking premium teas, we curate a diverse selection of high-quality teas
from esteemed tea gardens.

 Through our extensive network and market expertise,
we match buyers with teas that align with their preferences and requirements.<br/>
<a href="" className="note"><em>View Garden Catalogue</em></a></p></li>


<li><h4>
    Private Sales Facilitation</h4>
    <p>In addition to <span>auction representation</span>, we also <span>facilitate private sales</span> for both
producers and buyers. Our vast network of international buyers and producers allows
us to connect parties directly, enabling smooth trade negotiations.</p></li></ul>
            
</div>
           

           <div className="values">
    <h3>OUR VALUES <hr/></h3>
    <ul><li>
        <h4>Unmatched Expertise</h4>
        <p>
            At Atlas Tea Brokers, <strong>"We Know Tea"</strong> is not just a slogan; it represents the core of our
identity. Our team comprises seasoned professionals with extensive knowledge of the tea
industry, including cultivation practices, tea processing, market trends, and pricing dynamics.

This expertise empowers us to provide our clients with well-informed advice and actionable
insights to help them make strategic decisions.</p></li>

<li>
    <h4>Elasticity and Adaptability</h4>
    <p>As the tea industry evolves, so do we. We understand the significance of adaptability and
remain agile in response to emerging market trends, consumer preferences, and regulatory
changes. Our flexible approach ensures that our clients, whether producers or buyers, stay
competitive and seize opportunities in a dynamic market landscape.</p></li>

<li>
    <h4>Safeguarding Interests</h4>
    <p>
        One of our key mandates is to prioritize our clients' interests. We diligently adhere to the
instructions and terms stipulated by tea producers while assisting buyers in sourcing
premium teas that match their preferences. Our commitment to securing the highest possible
price for producers' teas under the prevailing market conditions and providing buyers with
the finest teas reflects our dedication to the success of all parties involved.</p></li>

<li><h4>Commitment to Sustainability</h4>
<p>As responsible brokers, we actively advocate for sustainable and eco-friendly practices
within the tea industry. We partner with socially responsible tea gardens and buyers who
share our values, supporting their efforts to promote sustainability and fair-trade practices.</p></li>

</ul>
           </div>

           <div className="garden-catalogue">
            <h3>GARDEN CATALOGUE<hr/></h3>
            <p>Welcome to our tea wonderland in Kenya, where the magic of nature meets the artistry of tea. </p>
            <ul>
                <li>Karirana</li>
                <li>Maramba</li>
                <li>Mogeni</li>
                <li>Nyarinda</li>
                <li>Kiptegen</li>
               <li>Magura</li> <li>Arroket</li>
               <li>Lelagoin</li><li>DL Teas <img src="../tea/DL-logo.png"/>
                
               </li>
<li>Emrok</li>
<li>Mokong</li>
<li>Kapchorua</li>
<li>Tinderet</li><li>Mulindi</li>
<li>Shagasha</li>
<li>Pfunda</li>
<li>Gisakura</li><li>Mata</li><li>Nyabihu</li><li>Rubaya</li><li>Gatare</li><li>Livingstonia</li>
<li>Mahenye</li><li>Kibena</li>
            </ul>
           </div>
             </div>
    );
}