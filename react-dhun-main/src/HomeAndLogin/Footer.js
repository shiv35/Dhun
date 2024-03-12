import React from 'react'
import './Footer.css'
import logo from './Images/Logof.png'
import facebook from './Images/facebook.png'
import whatsapp from './Images/whatsapp.png'
import linkedin from './Images/linkedin.png'
import instagram from './Images/instagram.png'
import twitter from './Images/twitter.png'
import telegeram from './Images/telegram.png'


export default function Footer() {
 if(window.location.pathname != "/Login") {

 return (
    <>
        <footer id="Contactus">
<a href="#"><img id='logo' src={logo} alt=""/></a>
<p>Where the Music Aficionados hang out</p>
<div id="Socialtext">Contact us</div>
<div className="Social flex items-center justify-center ">
  <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt=""/></a>
  <a href="https://web.whatsapp.com/" target="_blank"><img src={whatsapp} alt=""/></a>
  <a href="https://in.linkedin.com/" target="_blank"><img src={linkedin} alt=""/></a>
  <a href="https://www.instagram.com/?hl=en" target="_blank"><img src={instagram} alt=""/></a>
  <a href="https://twitter.com/?lang=en-in" target="_blank"><img src={twitter} alt=""/></a>
<a href="https://web.telegram.org/k/" target="_blank"><img src={telegeram} alt=""/></a>
</div>
<div id="transition3"></div>
<div id="copyright">
  Copyright &copy;2022 Dhun. Design by <span>Flexbots</span>
</div>
</footer>
    </>
  );
 }
}
