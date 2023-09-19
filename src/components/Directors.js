import download from '../tea/download.png';
import './Component.css';

export default function Directors() {
    return (
        <div className="directors">
            <h3>UNMATCHED EXPERTISE<hr/></h3>
            <div className="intro">
                <p>At Atlas Tea Brokers, <span>"We Know Tea"</span> is not just a slogan, it represents the core of our identity.
                    <br/>
                    Our team comprises <span>seasoned professionals</span> with <span>extensive knowledge</span> of the tea industry,
                    including <span>cultivation practices, tea processing, market trends, and pricing dynamics.</span>
                    <br/> 
                    We are empowered to provide our clients with well-informed advice and actionable insights to help them make strategic decisions.
                </p>
            </div>

            <h4 className="line-one">OUR DIRECTORS</h4>

            <div className="our-directors">
                                <div className="hilda">
                    <img src={download}
                        alt="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"
                        title="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"/>
                    <h5>Hilda Mugure<hr/> </h5>
                    <h6>Founder, Managing Director</h6>
                </div>

                <div className="george">
                    <img src={download} 
                        alt="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"
                        title="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"/>
                    <h5>Dr. George Muhoho<hr/></h5>
                    <h6>Chairman</h6>
                </div>

                <div className="romano">
                    <img src={download}
                        alt="Dr Romano Mungiri Kiome, Atlas Tea Brokers Ltd, Kenya"
                        title="Dr Romano Mungiri Kiome, Atlas Tea Brokers Ltd, Kenya"/>
                    <h5>Dr. Romano Kiome<hr/></h5>
                    <h6>Director</h6>
                </div>
            </div>

            <h4 className="two">MANAGERS</h4>
            <div className="our-managers">
                <div className="michael">
                    <img src={download}
                        alt="Michael Chemweno, General Manager, Atlas Tea Brokers Ltd, Kenya"
                        title="Michael Chemweno, General Manager"/>
                    <h5>Michael Chemweno<hr/></h5>
                    <h6>General Manager
                        </h6>
                </div>

                <div className="jeremiah">
                    <img src={download}
                        alt="Jeremiah Kinyua, Commercial Manager, Atlas Tea Brokers Ltd, Kenya"
                        title="Jeremiah Kinyua, Commercial Manager"/>
                    <h5>Jeremiah Kinyua<hr/></h5>
                    <h6>Commercial Manager
        </h6>
                </div>

                <div className="paul">
                    <img src={download}
                        alt="Paul Muoho, Finance Manager, Atlas Tea Brokers Ltd, Kenya"
                        title="Paul Muoho, Finance Manager"/>
                    <h5>Paul Muoho<hr/></h5>
                    <h6>Finance Manager</h6>
                </div>
            </div>

            <div className="close">
                <p>With <span>over 70 years</span> of combined industry experience, 
                    our team is composed of <span>90% youthful talent, </span> 
                    ensuring both deep-rooted expertise and a sustainable future.</p>
            </div>
        </div>
    );
}
