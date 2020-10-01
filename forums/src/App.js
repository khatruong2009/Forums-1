import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Subscribe from './components/Subscribe';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <main id='main'>
        <About />
        <Schedule />
        <Speakers />
        <Subscribe />
        <Gallery />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a href='#' class='back-to-top'>
        <i class='fa fa-angle-up'></i>
      </a>
    </div>
  );
}

export default App;
