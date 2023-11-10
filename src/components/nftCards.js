import React from 'react'
import NftCardComponent from './nftCards-component';
import GrowthImage from "../images/Growth.png"; // Update with the correct path
import ChatbotImage from "../images/Chatbot.png"; // Update with the correct path
import PartnershipImage from "../images/Partnership.png"; // Update with the correct path
import FutureImage from "../images/Future.png"; // Update with the correct path

function NftCards() {
  return (
    <div className="Nft__card">
      <div className="Nft__card-description">
        Boost Your Business with AI Integrations
      </div>
      <div className="Nft__card-component">
        <NftCardComponent 
          title="Empower Your Business"
          src={GrowthImage}
          subTitle="Leverage tailored AI for efficiency and growth"
          // description="Harness the power of AI to transform your company's operational efficiency with our custom solutions."
          Href="#AdditionalInformation-description"
        />
        <NftCardComponent 
          title="Innovative AI Chatbots"
          src={ChatbotImage}
          subTitle="Experience unparalleled interaction"
          // description="Our custom AI chatbots embody innovation and a commitment to your business's unique communication needs."
          Href="#AdditionalInformation-description"
        />
        <NftCardComponent 
          title="Partners in Progress"
          src={PartnershipImage}
          subTitle="Dedicated to your journey"
          // description="Embark on a collaborative partnership with us, marked by deep understanding and a commitment to your success."
          Href="#AdditionalInformation-description"
        />
        <NftCardComponent 
          title="Shaping the Future"
          src={FutureImage}
          subTitle="Innovation and excellence"
          // description="Join us as we pave the path towards a future enriched with AI, driving growth and excellence."
          Href="#AdditionalInformation-description"
        />
      </div>
      <a href="#Contact" rel="noreferrer" className="btn2 btn2--green">Contact Us</a>
    </div>
  );
}

export default NftCards;
