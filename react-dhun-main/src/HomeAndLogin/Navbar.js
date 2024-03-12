import React from 'react'
import './Navbar.css'
import logo from './Images/Logof.png'

export default function Navbar() {

  if(window.location.pathname == "/Aboutus")
  {
    return (
      <>
          <div id="container2">
        <div id="container1">
        <nav className='navi'>
          <div className="flexer">
            <a className="image" href="/"><img src={logo} alt="Logo Image" className='navImg'/></a>
          </div>
          <ul>
            <li><a className="text" href="Login">LOGIN</a></li>
            <li><a className="text" href="Gallery">GALLERY </a></li>
            <li><a className="text" href="#Contactus">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </div>
  
      </>
    );
  }

  else if(window.location.pathname == "/Gallery")
  {
    return (
      <>
          <div id="container2">
      <div id="container1">
        <nav>
          <div className="flexer">
            <a className="image" href="/"><img src={logo} alt="Logo Image"/></a>
          </div>
          <ul>
            <li><a className="text" href="Login">LOGIN</a></li>
            <li><a className="text" href="#Contactus">CONTACT US</a></li>
            <li><a className="text" href="Aboutus">ABOUT US</a></li>
          </ul>
        </nav>
      </div>
    </div>
  
      </>
    );
  }

  else if(window.location.pathname == "/Login") {
    return (
      <>
          <div id="container2">
      <div id="container1">
        <nav>
          <div className="flex">
            <a className="image" href="/"><img src={logo} alt="Logo Image"/></a>
          </div>
          <ul>
            <li><a className="text" href="Gallery">GALLERY </a></li>
            <li><a className="text" href="#Contactus">CONTACT US</a></li>
            <li><a className="text" href="Aboutus">ABOUT US</a></li>
          </ul>
        </nav>
      </div>
    </div>
  
      </>
    );
  }

  else {
    return (
      <>
          <div id="container2">
      <div id="container1">
        <nav>
          <div className="flex">
            <a className="image" href="#"><img src={logo} alt="Logo Image"/></a>
          </div>
          <ul>
            <li><a className="text" href="Login">LOGIN</a></li>
            <li><a className="text" href="Gallery">GALLERY </a></li>
            <li><a className="text" href="#Contactus">CONTACT US</a></li>
            <li><a className="text" href="#Aboutus">ABOUT US</a></li>
          </ul>
        </nav>
      </div>
    </div>
  
      </>
    );
  }
  
}
