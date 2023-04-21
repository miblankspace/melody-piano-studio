import React from 'react';
import { Button } from '@mui/material';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='text-container'>
        <h1>Melody Piano Studio</h1>
        <h3>Piano Lessons in Mississauga and Oakville</h3>
        <Button color='inherit' href='/contact-us' variant='contained'>
        Book a Free Consultation Lesson Today!</Button>
      </div>
      <div className='img-container'></div>
    </div>
  )
}

export default HeroSection
