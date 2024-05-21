// AboutPage.jsx
import React from 'react';
import Ritik from './about3.jpg'
import Ritik1 from './about1.jpg';
import Ritik2 from './about2.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="page-title">About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>My Name is Ritik</h2>
          <p>I am a web developer with a passion for creating beautiful and functional websites. With a background in both design and development, I bring a unique perspective to every project I work on. My goal is to deliver high-quality web solutions that meet the needs of my clients and their users.</p>
          <p>In my free time, I enjoy learning new technologies, experimenting with different design techniques, and contributing to open-source projects. I am always looking for new challenges and opportunities to grow as a developer.</p>
        </div>
        <div className="about-images">
          <img src={Ritik} alt="Ritik" className="about-image"/>
          <img src={Ritik1} alt="Working" className="about-image"/>
          <img src={Ritik2} alt="Coding" className="about-image"/>
        </div>
      </div>
      <div className="about-additional-info">
        <h2>More About My Journey</h2>
        <p>I started my journey in web development a few years ago and have since worked on numerous projects, ranging from small business websites to large-scale web applications. I specialize in front-end development but also have experience with back-end technologies. My skill set includes HTML, CSS, JavaScript, React, Node.js, and more.</p>
        <p>One of my favorite projects was developing an e-commerce platform that included a custom content management system. It was a challenging project that required me to wear many hats, from front-end design to back-end logic and database management. Seeing the final product in action and knowing that it helps businesses reach their customers was incredibly rewarding.</p>
      </div>
    </div>
  );
};

export default AboutPage;
