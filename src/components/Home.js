import React from 'react'
import AboutSection from './AboutSection';
import AppHeader from './appHeader';
import NftCards from './nftCards';
import ContactForm from './contactForm';
import AppFooter from './appFooter';


function Home(props) {
 

  return (
    <div>
      <AppHeader />
      <NftCards />
      <AboutSection setAppPage={props.setAppPage}/>
      <ContactForm />
      <AppFooter />
    </div>
  );
}

export default Home;
