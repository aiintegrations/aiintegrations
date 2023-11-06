import React, {useEffect} from 'react';
import Counter from './counter';
import html from "../images/html.jpg"
import css from "../images/css.jpg"
import python from "../images/python.jpg"
import blockchain from "../images/blockchain.jpg"
import bootstrap from "../images/bootstrap.jpg"
import java from "../images/java.jpg"
import aboutOcean from "../images/About_ocean.jpeg"
// import "../sass/abstracts"

const renderIcon = (id, comp) => {
  return(
    <div>
      <div>
        <div className={"about-page__technologies-component"} style={{backgroundImage: "url(" + comp +")",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover", height: "5rem", width: "5rem" }}></div>
      </div>
    </div>
  );
}

function About(props) {

  useEffect(() => {
    if (props.scrollPosition > 0) {
      // If scrollPosition is greater than 0, prevent scrolling in this tab
      document.body.style.overflow = 'hidden';
    } else {
      // Otherwise, allow scrolling
      document.body.style.overflow = 'auto';
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [props.scrollPosition]);

  // Replace with the actual YouTube video ID
  const tedTalkVideoId = 'reUZRyXxUs4';

  return (
    <div className="about-page">
      <div id='About'></div>

      <section className="about-page__ted-talk-reference" id='about-page' style={{backgroundImage: `linear-gradient(to right bottom, rgba(10, 30, 80, 0.6), rgba(50, 130, 200, 0.6), rgba(230, 180, 120, 0.6)), url(${aboutOcean})`,
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover"}}>
        <h2>How AI Could Empower Any Business | Dr. Andrew Ng | TED Talk</h2>
        <div className="about-page__video-container">
        <iframe
          src={`https://www.youtube.com/embed/${tedTalkVideoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='about-page__video-container-iframe'
        ></iframe>
        </div>
      </section>

      <div className='about-page__team'>
        <section className="about-page__team-team">
          <h2>Our Team</h2>
          <p className='about-page__team-team-text'>AI Integrations was founded with a combined 15 years of experience in Computer Science. Our team has been helping businesses solve their technological challenges with website design, data encryption, proprietary software, custom chatbots, and more!</p>
        </section>

        <section className="about-page__team-mission">
          <h2>Our Mission</h2>
          <p className='about-page__team-mission-text'>Our mission at AI Integrations is to help our clients stay ahead of the curve in an ever-changing digital world. We believe in the power of AI to revolutionize the way businesses interact with their customers – and we’re here to help you navigate this exciting new world!</p>
        </section>
      </div>

      <h2>Top Technologies</h2>

      <div className='about-page__technologies'>
        {renderIcon('html',html)}
        {renderIcon('css',css)}
        {renderIcon('python',python)}
        {renderIcon('blockchain',blockchain)}
        {renderIcon('bootstrap',bootstrap)}
        {renderIcon('java',java)}
      </div>

      <section className="about-page__counter">
        <div className="about-page__counter-container">
          <Counter target={95} followChar="%" followText="Websites Compatible "/>
          <div id='boarder-left'></div>
          <Counter target={15} followChar="+" followText="Combined Years Experience"/>
          <div id='boarder-right'></div>
          <Counter target={100} followChar="+" followText="Projects completed"/>
        </div>
        <div className='martop_2'></div>
        <a className="btn2 btn2--green" href="#Contact" onClick={() => props.setAppPage('home')}>Contact Us</a>
      </section>
    </div>
  );
}

export default About;
