import React from 'react';
import './Footer.sass';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='align-items-center footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>More</h2>
            <a href="https://github.com/briancodex/react-website-v1/tree/master" target="_blank">Inspired In</a>
            <h4>Made in 2021</h4>
            <h4>By Juan Pablo Pineda Melendez</h4>
            <h4>Computer Science Engineering Student</h4>
          </div>
          </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>My Social Media</h2>
            <a href="https://github.com/JuanPineda115" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/juan-pablo-pineda-mel%C3%A9ndez-554b48178" target="_blank">LinkedIn</a>
            <a href="mailto:jupapineda@gmail.com" target="_blank">Mail me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
