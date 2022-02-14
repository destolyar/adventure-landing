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
      <Partners/>
      <Opportunities/>
      <Features/>
      <Testimonials/>
      <Team/>
      <Pricing/>
      <Faq/>
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;
