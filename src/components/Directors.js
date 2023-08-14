import download from '../tea/download.png';
import './Component.css';

export default function Directors () {
    return (
        <div className="directors">
            
<h3>LEADERSHIP<hr/></h3>
<div className="our-directors">
    <div className="george">
    <img src={download} 
    alt="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"
   title="Dr George Muhoho, Atlas Tea Brokers Ltd, Kenya"/>
<h5>Dr George Muhoho </h5>
</div>

<div className="hilda">
    <img src={download}
    alt="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"
    title="Hilda Mugure, Atlas Tea Brokers Ltd, Kenya"/>

<h5>Hilda Mugure <hr/></h5>
<br/>
<h6>Founder, Managing Director</h6></div>

<div className="romano">
    <img src={download}
alt="Dr Romano Mungiri Koome, Atlas Tea Brokers Ltd, Kenya"
title="Dr Romano Mungiri Koome, Atlas Tea Brokers Ltd, Kenya"/>
<h5>Dr Romano Koome</h5>
</div>
</div>


                   </div>
    );
}