import React from 'react';

function About() {
  // Replace with the actual YouTube video ID
  const tedTalkVideoId = 'reUZRyXxUs4';

  return (
    <div className="about-page">
      <section className="about-header">
        <h1>About AI Integrations</h1>
      </section>

      <section className="ted-talk-reference">
        <h2>How AI Could Empower Any Business | Dr. Andrew Ng | TED Talk</h2>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${tedTalkVideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <p>AI Integrations was founded with a combined 15 years of experience in Computer Science. Our team has been helping businesses solve their technological challenges with website design, data encryption, proprietary software, custom chatbots, and more!</p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission at AI Integrations is to help our clients stay ahead of the curve in an ever-changing digital world. We believe in the power of AI to revolutionize the way businesses interact with their customers – and we’re here to help you navigate this exciting new world!</p>
      </section>

      <section className="cta">
        <h2>Transform your business with the power of AI</h2>
        <button onClick={() => { /* Implement contact functionality here */ }}>
          Contact AI Integrations
        </button>
      </section>
    </div>
  );
}

export default About;
