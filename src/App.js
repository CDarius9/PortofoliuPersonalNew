import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;