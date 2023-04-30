import React from 'react';
import { Button } from '@mui/material';
import './HeroSlide1.css';

function HeroSlide1() {

  const btnStyle1 = {
    padding: '10px 20px',
    background: '#122d7a',
    margin: '5px',
    border: 'solid'
  };

  const btnStyle2 = {
    padding: '10px 20px',
    background: '#fff',
    color: '#122d7a',
    margin: '5px',
    border: 'solid'
  };

  return (
    <div className='hero-container'>
      <div className='text-container'>
        <h1>Melody Piano Studio</h1>
        <p>Quality and Affordable Music Lessons</p>
        <div className='btn-container'>
          <Button style={btnStyle2} variant='contained' href='/about-us'>See our Teachers</Button>
          <Button style={btnStyle1} variant='contained' href='/contact-us'>Book a Lesson</Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSlide1