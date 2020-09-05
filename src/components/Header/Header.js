import React from 'react';
import  './style.css';
import logo from '../../cr_logo_w.svg';

function Header() {
    return (
        <header className="App-header">
        <div className="header-container">
          <div className="header-container-item">
            <a className="header-logo" href="/"><img src={logo} alt='logo'/></a>
            <div className="header-menu">
              <a className="header-menu-link" href="/">Про наc</a>
              <a className="header-menu-link" href="/">Ціни</a>
              <a className="header-menu-link" href="/">Редактори</a>
              <a className="header-menu-link" href="/">Блог</a>
            
            </div>
          </div>
          <div className="header-container-item">
            <div className="header-container-button">
              <button className="header-common-button">Перевірити текст</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;