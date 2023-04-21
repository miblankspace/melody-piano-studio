import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' exact element = {<Home />}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
