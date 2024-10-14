import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Hero/>
        <Projects/>
        <Blog/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;