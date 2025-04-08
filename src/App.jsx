import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Achievements from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;