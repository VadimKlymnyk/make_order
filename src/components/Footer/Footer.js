import React from 'react';
import  './style.css';

function Footer() {
    return (
      <footer className="footer">
        <nav className="footer-nav">
          <div className="nav-item">
            <a className="nav-item-a" href="https://www.facebook.com/correctarium/">Facebook</a>
          </div>
          <div className="nav-item">
            <a className="nav-item-a" href="mailto:manager@correctarium.com">manager@correctarium.com</a>
          </div>
        </nav> 
        <div className="footer-lang">
            <button className="lang-item">Українська</button>
            <button className="lang-item">Російська</button>
        </div> 
      </footer>
    );
  }
  
  export default Footer;