

import React, {useState} from 'react'

function NftCardComponent(props) {

    const [ dropdownShowing, setDropdownShowing ] = useState(false);

    const cardEvt = evt => {
        setDropdownShowing(!dropdownShowing);
    }

    const hrefEvt = evt => {
        evt.preventDefault();
    }

    return (
        <div className="cards">
            <div className={"card" + (dropdownShowing ? " show" : "")} onClick={cardEvt}>
                <div className="card__image-holder" style={{
                        backgroundImage: "url(" + props.src +")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                        }}  alt="wave">
                </div>
                <div className="card-title">
                    <a className="toggle-info btn" href="#" onClick={hrefEvt}>
                        <span className="left"></span>
                        <span className="right"></span>
                    </a>
                    <h2>
                        {props.title}
                        <small>{props.subTitle}</small>
                    </h2>
                </div>
                <div className="card-flap flap1">
                    <div className="card-description">
                        {props.description}
                    </div>
                    <div className="card-offerLink">
                        <a className="btn" rel="noreferrer" href="#AdditionalInformation-description">Get Started</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NftCardComponent;
