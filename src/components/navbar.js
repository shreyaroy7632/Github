import React from "react";
import './Navbar.css';
const Navbar = () => {
    return (
<>
  <nav className="sticky navbar">
    <div className="brand  display__logo">
      <a href="#top" className="nav__link">
        
        <span className="logo"><img src="OIP.png" height={50} width={50}/> &nbsp;IITK SnT</span>
      </a>
    </div>
    <input type="checkbox" id="nav" className="hidden" />
    <label htmlFor="nav" className="nav__open">
      <i />
      <i />
      <i />
    </label>
    <div className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/" className="nav__link" id="active">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/Projects" className="nav__link" >
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Database" className="nav__link">
            Events
          </a>
        </li>
        <li className="nav__item">
          <a href="/Database" className="nav__link">
          <img src="login.png" style={{ height: '22px' }} />

          </a>
        </li>
      </ul>
    </div>
    
  </nav>
 
</>


        );
    };
    
    export default Navbar;
    