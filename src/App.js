import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Hero />
        <AboutMe />
        <Interests />
      </div>
      
    </div>
  );
}

export default App;
