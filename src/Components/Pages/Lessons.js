import React from 'react';
import './Lessons.css';

function Lessons() {
    return (
      <>
        <h1>Packages</h1>
        <div className='pckg-container'>
            <div className='pckg'>
                <h2>Package #1: $x</h2>
                <p>benefit 1</p>
                <p>benefit 2</p>
                <p>benefit 3</p>
            </div>
            <div className='pckg'>
                <h2>Package #2: $y</h2>
                <p>benefit 1</p>
                <p>benefit 2</p>
                <p>benefit 3</p>
            </div>
            <div className='pckg'>
                <h2>Package #3: $z</h2>
                <p>benefit 1</p>
                <p>benefit 2</p>
                <p>benefit 3</p>
            </div>
        </div>
      </>
    )
  }
  
  export default Lessons