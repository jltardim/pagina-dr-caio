import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Treatments from './components/Treatments';
import Surgeries from './components/Surgeries';
import About from './components/About';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Treatments />
        <Surgeries />
        <About />
        <Steps />
        <Testimonials />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;