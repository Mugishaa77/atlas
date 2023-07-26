import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faLocationDot, faPhone, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
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

            <div className="contact-details">
<h2>Contact Us</h2>
<div className="contact-form">
    <h3>Contact form <FontAwesomeIcon icon={faEnvelopeOpenText} /></h3>
<form>
    <label>Name:</label>
    <input type="text"
    name="fullName"
    className="form-control"
    value={form.fullName}
    onChange={handleFormChange} />

    <label>Email:</label>
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
    <input type="text"
    name="messageItem"
    className="form-control"
    value={form.messageItem}
    onChange={handleFormChange} />


</form>
<button>Submit</button>
</div>
            </div>
            
            <div className="business-address">
                <h3>Business Address <FontAwesomeIcon icon={faLocationDot} /></h3>
                <p>Sec, 1 M.Nyali, (Off Links Shell Petrol Station)
                    <br/>
                    P.O. Box 3445-80100 Mombasa Kenya
                </p>
            </div>

            <div className="phone-number">
              <h3>Phone <FontAwesomeIcon icon={faPhone} /></h3>
              Tel:<a
                href="tel:0414471226"
                target="_blank"
                title="Tel"
                rel="noopener noreferrer"
              >
                
                <FontAwesomeIcon icon={faSquarePhone} />
                
                <span>041 4471226</span>
              </a>

              Mob:<a
                href="tel:+254729404044"
                target="_blank"
                title="Mob"
                rel="noopener noreferrer"
              >
                
                <FontAwesomeIcon icon={faSquarePhone} />
                <span>+254 729 404 044</span>
              </a>

            </div>

            <div className="email">
                 <a
                href="mailto:info@atlastea.co.ke"
                title="Email"
                rel="noopener noreferrer"
                className="email-link"
              >
                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                <span>info@atlastea.co.ke</span>
              </a>
            </div>
        </div>
    );
}