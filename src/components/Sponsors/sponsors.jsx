import React from 'react';
import google from '../../assets/images/google.png';
import slack from '../../assets/images/slack.png';
import atlassian from '../../assets/images/atlassian.png';
import dropbox from '../../assets/images/dropbox.png';
import shopify from '../../assets/images/shopify.png';
import './sponsors.css';

const sponsorsLogo = [
  google, slack, atlassian, dropbox, shopify
]


const Sponsors = () => (
  <div className="sponsor section__padding">
    {sponsorsLogo.map((logo) => (
      <div>
        <img src={logo} />
      </div>
    ))}
  </div>
);

export default Sponsors;
