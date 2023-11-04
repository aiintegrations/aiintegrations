import React from 'react'
import bgImg from "../images/laptop.jpeg"

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: 'auto', // Use 'auto' for immediate jump
      block: 'start',  // You can adjust this if needed
    });
  }
}

function AboutSection(props) {

  return (
    <div className="AboutMe">
      <div className="AboutMe-container">
        <div className='AboutMe-container-left'>
            <div className='AboutMe-container-left-content'>
              <h2>AI-Integrations Revolutionizes Your Website</h2>
              <div>Hello! We are AI Integrations, a digital agency that focuses on everything related to AI. We can help you with integrating chatbots into your website, designing chatbots, analyzing large amounts of data using AI, and more.</div>
              <div className='martop_2'></div>
              <a
                  className="btn2 btn2--white"
                  id="no_smooth_scroll"
                  href="#about-page"
                  onClick={() => {
                    props.setAppPage('about');
                    scrollToElement('about-page');
                    return false;
                  }}
                >About Us</a>
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

export default AboutSection;
