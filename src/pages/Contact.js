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
                href="tel:+25482404044"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
            >0782 404 044
              </a></span>
<br/>
              <span><strong>Mob:</strong><a
                href="tel:+254729404044"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
              >0729 404 044
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
<button>Send</button>
</div>
           </div>
<div className="section-two">
  <div className="map">
              <h3>Map and Directions<hr/></h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.847273971962!2d39.68501027415582!3d-4.0515567448997105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012fa1c12bb03%3A0x45ca6f90ce1f9874!2sShree%20Plaza!5e0!3m2!1sen!2ske!4v1695126255338!5m2!1sen!2ske"
               width="600" 
               height="450"  
               style={{ border: '0' }} 
               allowfullscreen="" 
               loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
    </div>
           <div className="business-section">
            <div className="business-address">
                <h3>Business Address <FontAwesomeIcon icon={faLocationDot} /><hr/></h3>
                <p>Shree Plaza Building, 4th Floor
                  <br />
                    Fidel Odinga Rd Nyali
                    <br/>
                    
                    <span>P.O. Box 3445-80100 Mombasa Kenya</span>
                </p>
            </div>

            <div className="business">
              <h3>Business Hours<hr/></h3>
              <h4><FontAwesomeIcon icon={faDoorOpen} />Open</h4>
              <ul>
                <li>Mon - Fri: 08:00 AM - 05:00 PM EAT </li>
                <li>Saturday: 09:00 AM - 01:00 PM EAT</li>
              </ul>
              
              <h4 >Sundays - Closed <FontAwesomeIcon icon={faDoorClosed} /></h4>

            
            </div>

            

           </div>
                
 
            

            

            
           

             </div>
     </div>      
      
    );
}