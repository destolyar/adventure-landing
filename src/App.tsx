import React from 'react';
import './App.scss';

import { Header } from './components/Header';
import { WelcomeSection } from './components/WelcomeSection';
import { Partners } from './components/Partners';
import { Opportunities } from './components/Opportunities';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { SignUp } from './components/SignUp';
import { Footer } from './components/Footer';


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className='header-container container'>
        <Header/>
      </header>

      <section className='welcome-section-container container'>
        <WelcomeSection/>
      </section>

      <section className='partners-container container'>
        <Partners/>
      </section>

      <section className='opportunities-container container'>
        <Opportunities/>
      </section>

      <section className='features-container container'>
        <Features/>
      </section>

      <section className='testimonials-container container'>
        <Testimonials/>
      </section>

      <section className='team-container container'>
        <Team/>
      </section>

      <section className='pricing-container container'>
        <Pricing/>
      </section>

      <section className='faq-container container'>
        <Faq/>
      </section>

      <section className='signup-container container'>
        <SignUp/>
      </section>

      <footer className='footer-container container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
