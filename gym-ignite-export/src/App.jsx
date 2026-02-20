import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import ProblemSolution from './components/home/ProblemSolution';
import Programs from './components/home/Programs';
import Gallery from './components/home/Gallery';
import Testimonials from './components/home/Testimonials';
import Pricing from './components/home/Pricing';
import LeadCapture from './components/home/LeadCapture';
import FAQ from './components/home/FAQ';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Programs />
        <Gallery />
        <Testimonials />
        <Pricing />
        <LeadCapture />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
