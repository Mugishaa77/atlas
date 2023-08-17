import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faLocationDot, faPhone, faEnvelope, faDoorOpen, faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


export default function Contact () {

    const [form, setForm] = React.useState({
        fullName: '',
        emailAddress: '',
        subject: '',
        messageItem: ''

    })

     const handleFormChange = (event) => {
  const { name, value } = event.target;
  setForm(prevForm => ({...prevForm, [name]: value }));
};

    return (
        <div className="contact">
          

            <div className="header-slideshow">
            
            </div>

 <h2>CONTACT US <hr/></h2>
 <div className="contact-welcome">
 <p>
    At Atlas, we are committed to safeguarding our clients' interests in all our interactions and endeavors.
     We wholeheartedly prioritize your concerns above all else.
  </p></div>

                     <div className="top-section">     
                <div className="contact-information">
                  <h1>Contact Information<hr/></h1>
                 <div className="phone">
              <h3>
                 <FontAwesomeIcon icon={faPhone} />
                 PHONE</h3>
              <span>

              <strong>Tel:</strong><a
                href="tel:0414471226"
                target="_blank"
                title="Tel"
                rel="noopener noreferrer"
            >041 4471226
              </a></span>
<br/>
              <span><strong>Mob:</strong><a
                href="tel:+254729404044"
                target="_blank"
                title="Mob"
                rel="noopener noreferrer"
              >+254 729 404 044
              </a></span>

            </div>

            <div className="email">
              <h3> <FontAwesomeIcon icon={faEnvelope} 
              />EMAIL </h3>
                 <a
                href="mailto:info@atlastea.co.ke"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"
              >
                <span>info@atlastea.co.ke</span>
              </a>
            </div>

            <div className="socials">
              <h3>Social Media Links</h3>
            </div>
</div>
 <div className="contact-form">
    <h3>Leave a  Message
        <FontAwesomeIcon icon={faEnvelopeOpenText} /><hr/></h3>
<form>
    <label>Name</label>
    <input type="text"
    name="fullName"
    className="form-control"
    value={form.fullName}
    onChange={handleFormChange} />

    <label>Email</label>
    <input type="text"
    name="emailAddress"
    className="form-control"
    value={form.emailAddress}
    onChange={handleFormChange}/>

    <label>Subject</label>
    <input type="text"
    name="subject"
    className="form-control"
    value={form.subject}
    onChange={handleFormChange}/>

    <label>Message</label>
    <textarea type="text"
    name="messageItem"
    className="form-control"
    value={form.messageItem}
    onChange={handleFormChange} 
    rows="5"
    placeholder="type your message here"></textarea>


</form>
<button>Submit</button>
</div>
           </div>
                
 
            <div className="business-address">
                <h3>Business Address <FontAwesomeIcon icon={faLocationDot} /><hr/></h3>
                <p>Sec, 1 M.Nyali, (Off Links Shell Petrol Station)
                    <br/>
                    P.O. Box 3445-80100 Mombasa Kenya
                </p>
            </div>

            

            <div className="business">
              <h3>Business Hours<hr/></h3>
              <h4><FontAwesomeIcon icon={faDoorOpen} />Open</h4>
              <ul>
                <li>Mon - Fri: 08:00 AM - 05:00 PM EAT </li>
                <li>Saturday: 09:00 AM - 02:00 PM EAT</li>
              </ul>
              
              <h4 >Sundays - Closed <FontAwesomeIcon icon={faDoorClosed} /></h4>

            
            </div>
           

             <div className="map">
              <h3>Maps and Directions<hr/></h3>
               <iframe
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8459386310574!2d39.68570417420655!3d-4.051828144901343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012f98b4939d7%3A0x5017c8e77eb3342f!2sShell!5e0!3m2!1sen!2ske!4v1690378146667!5m2!1sen!2ske"
      width="600"
      height="450"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
     </div>      
      
    );
}