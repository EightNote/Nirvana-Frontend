import React from 'react';
import Feature from '../../new/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What's In It For You" text=" Nirvana is the one-stop solution for all your music needs. Nirvana offers you free, unlimited access to over 30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music And Mirchi Play. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Nirvana - The Soul of Music, Explore The Melody Within! </h1>
      <h2 className="gradient__text"> Explore Artists </h2>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Trendings" text="Listen what the Worled is loving, Explore the Trending Tracks, Albums and Artists Here! " />
      <Feature title="All Tracks" text="Music washes away from the soul the dust of everyday life. Explore the latest Songs Here! " />
      <Feature title="Albums" text="This might be the Album of your life, Explore the Greatest Albums Here! " />
    </div>
  </div>
);

export default WhatGPT3;
