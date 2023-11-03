import React, {useState} from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


function AddressForm(props) {
    const [ country, setCountry ] = useState('');
    const [ region, setRegion ] = useState('');
    const [ formSubmitted, setformSubmitted ] = useState(null);

    const submitForm = evt => {
        evt.preventDefault();
        const form = evt.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formspree.io/f/xbjqwrda");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setformSubmitted(true);
            }
            else {
                setformSubmitted(false);
            } 
        };
        xhr.send(data);
    }

  return (
    <div >
        <div className="validCode UnlockableContent-validCode">That was a valid code!</div>
        <form onSubmit={submitForm} className="AddressForm">
          Please double check to make sure the address is entered in correctly
          <div>
              <input type="email" id="" name="Email" placeholder="Email@example.com" className="AddressForm-email"/>
              <input type="text" id="" name="Street Address" placeholder="Street Address" className="AddressForm-address"/>
          </div>
          <CountryDropdown
            value={country}
            name="Country"
            onChange={(val) => setCountry(val)} 
            className="AddressForm-country"/>
          <div>
              <RegionDropdown
                country={country}
                name="Region"
                value={region}
                onChange={(val) => setRegion(val)} 
                className="AddressForm-region"/>
              <input type="text" id="" name="zip code" placeholder="Zip Code" className="AddressForm-zipCode"/>
          </div>
          <input type="text" className="AddressForm-unlockCode" name="unlockCode" value={props.unlockCode} readOnly={true}/>
          <button type="submit" value="submit" className="btn2 btn2--white">Submit</button>
        </form>
        { formSubmitted === null ? (null) : formSubmitted ? ("Success, Email was sent!") : ("Error")}
    </div>
  );
}

export default AddressForm;
