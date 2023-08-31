import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faFireFlameCurved, faIndustry } from "@fortawesome/free-solid-svg-icons";
import '../News.css';

export default function News () {
    return (
        <div className="news">
            <h2>NEWS<hr/></h2>
            The News Section is under construction, but here is an overview of it's expected output
            <div className="display">
                <div className="display-one">
                <div className="trends">
                    <h3>WHAT'S TRENDING <FontAwesomeIcon icon={faFireFlameCurved} /></h3>
                    <p>Dedicated to capturing the pulse of contemporary tea culture, this section highlights the latest tea trends, innovations, and evolving consumer preferences. From novel tea blends and brewing techniques to innovative tea-related products and experiential concepts, this section serves as a guide for tea enthusiasts who want to stay informed about the ever-changing landscape of tea enjoyment and exploration.</p>

                </div>
                <div className="markets">
                    <h3>WORLD TEA MARKETS <FontAwesomeIcon icon={faChartLine} /></h3>
                    <p>This section provides a comprehensive overview of the global tea industry, encompassing market dynamics, trade insights, and economic factors influencing tea production, distribution, and consumption. By analyzing market trends, pricing fluctuations, supply and demand shifts, and the influence of international trade policies, this section caters to investors, traders, and anyone interested in the intricate web of tea commerce on a global scale.</p>
                </div>
                <div className="updates">
                    <h3>TEA INDUSTRY UPDATES <FontAwesomeIcon icon={faIndustry} /></h3>
                    <p>Share news about important events and developments within the tea industry, such as mergers, acquisitions, partnerships, and regulatory changes.</p>
                </div>
                </div>
                <div className="display-two">
                <div className="production">
                    <h4>TEA PRODUCTION AND SOURCING</h4>
                    <p>Cover news related to tea cultivation, harvesting, processing,
                         and sourcing. This could include information about different tea varieties, growing regions, and farming practices.</p>
                </div>
                
                </div>

                <div className="display-three">
                    <h6>Bonus topics will include either of the following:</h6>
                    <div className="health">
                    <h5>HEALTH AND WELLNESS</h5>
                    <p>Cover news about the health benefits of tea, new research findings, and trends related to tea consumption for health and wellness purposes.</p>
                </div>
                <div className="culture">
                    <h5>TEA CULTURE AND TRADITIONS</h5>
                    <p> Highlight the cultural aspects of tea, including information about tea ceremonies, traditions, and historical significance in various regions around the world.</p>
                </div>
                <div className="tasting">
                    <h5>TEA TASTING AND REVIEWS</h5>
                    <p>Provide information about tea tasting techniques, profiles of different teas, and reviews of tea products. This could be particularly useful for your customers who are looking to purchase teas.</p>
                </div>
                <div className="ethics">
                    <h5>SUSTAINABILITY AND ETHICAL PRACTICES</h5>
                    <p>Share news about sustainable and ethical practices within the tea industry, including topics like organic farming, fair trade, and environmental initiatives.</p>
                </div>
                <div className="education">
                    <h5>TEA EDUCATION</h5>
                    Offer educational content about different types of tea, brewing methods, storage tips, and more. This can help your audience become more knowledgeable tea enthusiasts.
                </div>
                <div className="events">
                    <h5>TEA EVENTS AND FESTIVALS</h5>
                    <p>Keep your audience informed about upcoming tea-related events, festivals, trade shows, and workshops happening globally.</p>
                </div>
                <div className="recipes">
                    <h5>TEA RECIPES AND PAIRINGS</h5>
                    <p>Provide recipes for tea-infused drinks, snacks, and dishes, as well as suggestions for tea and food pairings.</p>
                </div>
                </div>

                
            </div>
        </div>
    );
}