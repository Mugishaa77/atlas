import '../News.css';

export default function News () {
    return (
        <div className="news">
           <h2>NEWS<hr/></h2>
           <div className="digital">
            <h5>Mombasa Tea Auction Goes Digital</h5>
            
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/6mbvhDDa6Ns?si=Fg6y-cAuav4733LE"
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
           </div>

           <div>
            <h5>Rainforest Alliance Lifts Suspensions on Kenyan Tea Certificate Holders</h5>
                 <p>
                    In a significant development, the Rainforest Alliance has recently lifted the suspensions on two 
                    Kenyan tea certificate holders, James Finlay Kenya and ekaterra Tea Kenya. This decision comes as a
                     result of commendable corrective actions taken by the owners. Find out how their commitment to 
                     sustainability paved the way for these positive changes.
                 </p>
                 <a href="https://www.rainforest-alliance.org/business/suspensions-lifted-on-two-kenyan-tea-certificate-holders/"
                 target="_blank"
                 rel="noopener noreferrer">Read more.</a>
           </div>

           <div>
            <h5>Weakening Shilling Results in Gain for Tea Farmers</h5>
            <p>The Mombasa Tea Auction continues to see a positive trend as the strong US dollar gains ground against the local
                 currency. For tea farmers, this signals the promise of higher returns compared to the previous year.
                  Learn more about the factors driving this upward trajectory in tea prices and what it means for the industry.</p>
                  <a href="https://www.the-star.co.ke/business/kenya/2022-07-29-tea-prices-remain-stable-as-strong-dollar-earns-farmers-more/"
                  target="_blank"
                 rel="noopener noreferrer">Read more.</a>
           </div>
           
        </div>
    );
}