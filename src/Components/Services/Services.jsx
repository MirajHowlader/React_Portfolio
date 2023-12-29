import React from 'react';


import './Services.css';
import Card from '../Card/Card';

import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, sed.<br />ipsum is simpleyt dummy text of priting</span>
            <a href="">
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
           <div style={{left:'14rem'}}>
           <Card 
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Facebook Ads, Google Ads, CEO, Shopify, and more...'}
            
            />
           </div>
              {/* second card */}
           <div style={{top:'12rem',left:'-4rem'}}>
           <Card 
            emoji={Glasses}
            heading={'Developer'}
            detail={'Html, Css, JavaScript, React'}
            
            />
           </div>
           {/* third card */}
           <div style={{top:'19rem',left:'12rem'}}>
           <Card 
            emoji={Humble}
            heading={'Digital Merketing'}
            detail={'Facebook, Google, Shopify, Instagram, Linkedin, Twiter'}
            
            />
           </div>
           <div className="blur s-blur2" style={{background:'var(--purplae)'}}></div>
        </div>
    </div>
  )
}

export default Services