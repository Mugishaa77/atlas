import React, {useState} from 'react';
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
    <h3>Contact form</h3>
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
                Display your company's physical address 
                so that people can reach out to you through traditional mail or visit your office if needed
            </div>

            <div className="phone-number">

            </div>
        </div>
    );
}