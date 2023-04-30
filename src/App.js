import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Lessons from './Components/Pages/Lessons';
import About from './Components/Pages/About';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element = {<Home />}/> 
            <Route path='/about-us' exact element = {<About />} />
            <Route path='/lessons' exact element = {<Lessons />} />
            <Route path='/contact-us' exact element = {<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
