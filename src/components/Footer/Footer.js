import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Btn } from '../Btn/Btn';
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
    <div className='footer-main-container'>
      <section className='footer-sub'>
        <p className='footer-sub-heading'>
          JDoodle For Your Organisation
        </p>
        <div className='data-input'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Btn buttonStyle='btn--outline'>Support Request</Btn>
          </form>
        </div>
      </section>

      <div className='footer-items'>
        <div className='footer-item-wrapper'>
          <div className='footer-item-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-item-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-item-wrapper'>
          <div className='footer-item-items'>
            <h2>Support</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-item-items'>
            <h2>Terms</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-item-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-item-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src={logo} style={{ width: '150px' }} />

            </Link>
          </div>
          <small className='website-rights'>Copyright © JDoodle. All rights reserved </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
