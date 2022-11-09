import React from 'react';
import './feature.css';

const Feature = ({ title, text, linkk }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1 href = {linkk}>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
