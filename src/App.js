import React from 'react';
import Analytics from './components/analytics/Analytics';
import Cards from './components/cards/Cards';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Newsletters from './components/navbar/newsletters/Newsletters';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletters />
      <Cards />
    </div>
  );
}

export default App;
