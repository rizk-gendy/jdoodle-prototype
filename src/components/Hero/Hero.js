import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { Btn } from '../Btn/Btn';

function Hero({
  sectionName,
  whiteHeading,
  whiteDesc,
  heading,
  sectionDesc,
  buttonText,
  videoSrc,
  videoStart,
  whiteBackgroundColor
}) {
  return (
    <>
      <div
        className={ !whiteBackgroundColor ? 'hero-container': 'hero-container whiteBg ' }
      >
        <div className='container'>
          <div
            className='row hero-line'
            style={{
              display: 'flex',
              flexDirection: videoStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='hero-text-container'>
                <div className='section-name gradient__text'>{sectionName}</div>
                <h1 className={whiteHeading ? 'heading' : 'heading black'}>
                  {heading}
                </h1>
                <p
                  className={
                    whiteDesc
                      ? 'hero-sectionDesc'
                      : 'hero-sectionDesc black'
                  }
                >
                  {sectionDesc}
                </p>
                <Link to='/sign-up'>
                  <Btn buttonSize='btn--wide' buttonColor='blue'>
                    {buttonText}
                  </Btn>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='hero-animation-wrapper'>
                <Player
                  src={videoSrc}
                  className="player"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
