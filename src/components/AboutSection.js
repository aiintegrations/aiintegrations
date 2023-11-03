import React, { useState } from 'react'
import AddressForm from './addressForm';
import bgImg from "../images/laptop.jpeg"

function UnlockableContent() {
  const [unlockCode, setUnlockCode] = useState('');

  return (
    <div className="AboutMe">
      <div className="AboutMe-container">
        <div className='AboutMe-container-left'>
            <div className='AboutMe-container-left-content'>
              <h2>AI-Integrations Revolutionizes Your Website</h2>
              <div>Hello! We are AI Integrations, a digital agency that focuses on everything related to AI. We can help you with integrating chatbots into your website, designing chatbots, analyzing large amounts of data using AI, and more.</div>
              <button value="submit" className="btn2 btn2--white">About Us</button>
            </div>
        </div>
        <div className='AboutMe-container-right'>
        <div className='AboutMe-container-right-content' style={{backgroundImage: "url(" + bgImg +")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover", height: "25rem" }}></div>
        </div>
      </div>
    </div>
  );
}

export default UnlockableContent;
