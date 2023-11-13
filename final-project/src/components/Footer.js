import React from 'react';
import './Footer.css'; // You can create a CSS file for styling
import youtube from '../images/yotube.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

function Footer() {
  return (
    <header className="app-footer">
      <link href='https://fonts.googleapis.com/css?family=Kaushan Script' rel='stylesheet'></link>
      <div class='socials'>
             <img src={youtube} alt="youtube Icon" class="icons"/>
             <img src={twitter} alt="Barn Icon" class="icons"/>
             <img src={facebook} alt="Farmer Icon" class="icons"/>
             <img src={instagram} alt="Thumb Icon" class="icons"/>
         </div>
      <h1 class='contactText'>Contact Us<br></br>123-456-7890</h1>
    </header>
  );
}

export default Footer;