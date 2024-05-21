// src/HomePage.jsx
import React from 'react';

import profileImage from './ritik.jpg'; // Make sure you have an image named 'profile.jpg' in the src folder or adjust the path accordingly

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="left-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="right-section">
          <h1 className="title">Ritik Kumar</h1>
          <p className="subtitle">Web Developer</p>
          <p className="description">
            Hello! I am Ritik kumar, a passionate web developer with expertise in creating dynamic and responsive web applications. I love to design and develop websites that not only look great but also offer a seamless user experience. Always eager to learn and stay updated with the latest trends in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
