import React from 'react'
import './Footer.css'

function Footer () {
  return (
  <div className="footer">
    <h1>
      Bad Taste: tailor-made recommandations for people loving their bad tastes.
    </h1>

    <div className="row1">
      <div className="about">
        <h1>About</h1>
        <p> Bad Taste is an unpretentious project aiming to provide a tailor-made selection based on the user's taste, bad or good, we do not judge your preferences. Our application is designed to make the most of your free time by preventing you from scrolling endlessly.</p>
     </div>
     <div className="categories">
      <h1>Categories</h1>
      <ul>
        <li>Movies</li>
        <li>TV Shows</li>
      </ul>
    </div>
    <div className="contact">
      <h1>Contact us</h1>
      <h3>Bad Tasters</h3>
        <p>Wild Code School Berlin</p>
        <p>Oudenarder Straße 16 </p>
        <p>Building E23, 2nd floor, 13347 Berlin</p>
        <p>berlin@wildcodeschool.com</p>
    </div>
      </div>
    
    <div className="bottom">
      <p className="signature-text">
        Project by Group 1, Wild Code School March 2021
      </p>
      <p className="logo">
      </p>
    </div>

    </div>
  );
}

export default Footer