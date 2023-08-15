import download from '../tea/download.png';
import './Component.css';

export default function Directors () {
    return (
        <div className="directors">
            
<h3>LEADERSHIP<hr/></h3>
<div className="intro">
<p>Meet the Driving Force Behind Atlas.
     Our team of experienced directors and managers is
      the backbone of our company, bringing a wealth of
       expertise and passion to every aspect of our 
       operations. 
       With a shared commitment to excellence and 
       innovation, our leadership ensures that
        Atlas remains at the forefront of the tea 
        brokerage industry.</p></div>

<h4>OUR DIRECTORS<hr/></h4>

<div className="our-directors">

    <div className="hilda">
    <img src={download}
    alt="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"
    title="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"/>

<h5>Hilda Mugure <hr/></h5>

<h6>Founder, Managing Director</h6>
</div>

    <div className="george">
    <img src={download} 
    alt="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"
   title="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"/>
<h5>Dr. George Muhoho<hr/></h5>

<h6> Chairman</h6>
</div>



<div className="romano">
    <img src={download}
alt="Dr Romano Mungiri Kiome, Atlas Tea Brokers Ltd, Kenya"
title="Dr Romano Mungiri Kiome, Atlas Tea Brokers Ltd, Kenya"/>
<h5>Dr. Romano Kiome<hr/></h5>
</div>
</div>

<h4 className="two">MANAGERS<hr/></h4>
<div className="our-managers">
    <div className="michael">
        <img src={download}
        alt="Michael Chemweno, Operation Sales and Marketing Manager, Atlas Tea Brokers Ltd, Kenya"
      title="Michael Chemweno, Operation Sales and Marketing Manager"/>
    <h5>Michael Chemweno<hr/></h5>
    <h6>Operations,<br/>
        Sales and Marketing Manager</h6>
    </div>

    <div className="jeremiah">
        <img src={download}
        alt="Jeremiah Kinyua, Manager, Quality Assurance, Atlas Tea Brokers Ltd, Kenya"
        title="Jeremiah Kinyua, Manager, Quality Assurance"/>
    <h5>Jeremiah Kinyua<hr/></h5>
    <h6>Manager,<br/>
     Quality Assurance</h6>
    </div>

    <div classname="paul">
        <img src={download}
        alt="Paul Muhoho, Finance Manager, Atlas Tea Brokers Ltd, Kenya"
        title="Paul Muhoho, Finance Manager"/>
        <h5>Paul Muhoho<hr/></h5>
        <h6>Finance Manager</h6>
    </div>
</div>


                   </div>
    );
}