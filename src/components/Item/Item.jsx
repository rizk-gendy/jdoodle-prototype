import React from 'react';
import './item.css';

const Item = ({ title, text }) => (
  <div className="features-container-item">
    <div className="features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="feature-text">
      <p>{text}</p>
    </div>
  </div>
);
export default Item;
