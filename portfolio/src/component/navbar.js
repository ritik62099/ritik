import React from 'react';
import Home from './home'
import Work from './work'
import About from './about'
import Services from './services'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="navbar">
      <div className="navbar-left">
        <span className="name">Ritik Gupta</span>
      </div>
      <div className="navbar-right">
        <span className="nav-item" onClick={() => scrollToSection('home')}>Home</span>
        <span className="nav-item" onClick={() => scrollToSection('work')}>Work</span>
        <span className="nav-item" onClick={() => scrollToSection('about')}>About</span>
        <span className="nav-item" onClick={() => scrollToSection('services')}>Services</span>
      </div>
    </div>
    <div id="home" style={{ height: '100vh', backgroundColor: 'lightblue' }}><Home/></div>
    <div id="work" style={{ height: '100vh', backgroundColor: 'lightgreen' }}><Work/></div>
    <div id="about" style={{ height: 'auto', backgroundColor: 'lightyellow' }}><About/></div>
    <div id="services" style={{ height: 'auto', backgroundColor: 'lightcoral' }}><Services/></div>
    </>
  );
};

export default Navbar;

