import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Btn } from '../Btn/Btn';
import './AnimatedPanel.css';

const AnimatedPanel = () => (
  <div className="panel section__padding" id="animatedPanel">
    <div className="panel-video">
      <Player
        src='https://assets9.lottiefiles.com/packages/lf20_vnikrcia.json'
        className="player"
        loop
        autoplay
      />
    </div>
    <div className="panel-content">
      <h4>The Ultimate Online Editor for Programmers</h4>
      <h1 className="gradient__text">Experience Seamless Coding  <br /> and Testing with JDoodle</h1>
      <p>JDoodle is the ultimate online coding platform that provides programmers with a seamless experience for coding and testing. Whether you're a beginner or an experienced programmer, JDoodle offers a user-friendly interface that allows you to write, compile, and run code in over 70 programming languages</p>
      <Btn buttonSize='btn--wide' buttonColor='blue'>Start Coding Now</Btn>
    </div>
  </div>
);

export default AnimatedPanel;
