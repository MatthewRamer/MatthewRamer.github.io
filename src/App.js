import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Interests from './components/Interests';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContent">
        <Hero />
        <Resume />
        <AboutMe />
        <Interests />
      </div>
      
    </div>
  );
}

export default App;
