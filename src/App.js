import React from 'react';
import Analytics from './components/analytics/Analytics';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
