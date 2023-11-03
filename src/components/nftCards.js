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
          // description="Won 4 top ranking metals in"
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="Franchises"
          src={franchise}
          subTitle={"Human-like Responses"}
          // description="Over 500 photo's available."
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="Short Term Rentals"
          src={shortterm}
          subTitle={"Guests' Answers Help"}
          // description="Competed 10 times, and have placed first in nationals. "
          Href="#AdditionalInformation-description" />
        <NftCardComponent title="IT Support"
          src={gpu}
          subTitle={"Pushing the boundaries"}
          // description="Competed 1 time"
          Href="#AdditionalInformation-description" />
      </div>
      <a href="#AdditionalInformation-description" rel="noreferrer" className="btn2 btn2--green">Contact Us</a>
    </div>
  );
}

export default NftCards;
