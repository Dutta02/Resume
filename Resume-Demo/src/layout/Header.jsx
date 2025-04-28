import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaWpforms, FaDownload } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { SiAltiumdesigner, SiReactiveresume } from 'react-icons/si';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header">
         <Link to="/" className="nav-link">
      <div className="logo">
        <SiReactiveresume />
      </div>
      </Link>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>

        <Link to="/design" className="nav-link">
          <div className="home">
            <div className="home1">
              <SiAltiumdesigner />
            </div>
            <div><span>Design</span></div>
          </div>
        </Link>

        <Link to="/form" className="nav-link">
          <div className="home">
            <div className="home1">
              <FaWpforms />
            </div>
            <div><span>Form</span></div>
          </div>
        </Link>

        <Link to="/download" className="nav-link">
          <div className="home">
            <div className="home1">
              <FaDownload />
            </div>
            <div><span>Download</span></div>
          </div>
        </Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  )
}

export default Header;
