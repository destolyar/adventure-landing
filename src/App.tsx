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
      <Header/>
      <WelcomeSection/>

      <section className='partners-container'>
        <Partners/>
      </section>

      <section className='opportunities-container'>
        <Opportunities/>
      </section>

      <section className='features-container'>
        <Features/>
      </section>

      <section className='testimonials-container'>
        <Testimonials/>
      </section>

      <section className='team-container'>
        <Team/>
      </section>

      <section className='pricing-container'>
        <Pricing/>
      </section>

      <section className='faq-container'>
        <Faq/>
      </section>

      <section className='signup-container'>
        <SignUp/>
      </section>

      <footer className='footer-container'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
