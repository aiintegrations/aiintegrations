import React from 'react'
import UnlockableContent from './AboutSection';
import AppHeader from './appHeader';
import NftCards from './nftCards';
import ContactForm from './contactForm';
import AppFooter from './appFooter';


function Home() {
 

  return (
    <div>
      <AppHeader />
      <NftCards />
      <UnlockableContent />
      <ContactForm />
      <AppFooter />
    </div>
  );
}

export default Home;
