import React from 'react';
import './App.css';
import Navigation from './navbar.js'
import Paragraphs from './paragraphs.js'
import Cards from './cards.js'
import HealthPlatform from './biggest-health.js'
import Improve from './improve.js'
import Footer from './footer.js'
import Post from './grid.js'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Paragraphs />
      <Cards />
      <HealthPlatform />
      <Improve />
      <Post/>
      <Footer />
    
    </div>
  );
}

export default App;
