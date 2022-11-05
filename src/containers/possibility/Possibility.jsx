import { Headphones } from '@mui/icons-material';
import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import headphoneImage from '../../assets/headphone.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" style={{paddingTop:"0vh", marginTop:"0vh"}} id="possibility">
    <div className="gpt3__possibility-image">
    <img  src={headphoneImage} alt="Headphone"></img>
      {/* <img src={possibilityImage} alt="possibility" /> */}
    </div>
    <div className="gpt3__possibility-content">



      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>

      <p> Every song is gonna hit you hard but we bet you won't feel the pain. Find and Enjoy your taste of music from the millions of songs available on our music web app. Nirvana - The Soul of Music, Music that touches you deep. Explore The Melody Within! </p>

    </div>
  </div>
);

export default Possibility;
