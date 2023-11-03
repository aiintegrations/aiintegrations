import React, { useEffect, useState } from 'react'
import NftCardComponent from './nftCards-component';
import pizza from "../images/pizza.jpeg";
import franchise from "../images/Franchise.jpeg";
import gpu from "../images/gpu.jpeg";
import shortterm from "../images/shortterm.jpeg";

function NftCards() {

  // const [cardData, setCardData] = useState(null);

  // useEffect(() => {
  //   getGitHubUserWithFetch();
  // }, []);

  // const getGitHubUserWithFetch = async () => {
  //   const response = await fetch(gitHubUrl);
  //   const jsonData = await response.json();
  //   setCardData(jsonData);
  // };

  return (
    <div className="Nft__card">
      <div className="Nft__card-description">
        Boost Your Business with AI Integrations
      </div>
      <div className="Nft__card-component">
        <NftCardComponent title="Restaurants"
          src={pizza}
          subTitle={"Chatbot support"}
          // 
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="Franchises"
          src={franchise}
          subTitle={"Human-like Responses"}
          // 
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="Short Term Rentals"
          src={shortterm}
          subTitle={"Guests' Answers Help"}
          // 
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="IT Support"
          src={gpu}
          subTitle={"Pushing the boundaries"}
          // 
          Href="#AdditionalInformation-description" />
      </div>
      <a href="#AdditionalInformation-description" rel="noreferrer" className="btn2 btn2--green">Contact Us</a>
    </div>
  );
}

export default NftCards;
