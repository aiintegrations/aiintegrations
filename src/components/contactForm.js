import React, {useState} from 'react'

function ContactForm() {

  const [ formSubmitted, setformSubmitted ] = useState(null);

  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);
    console.log(evt.target.value);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mbjvyqda"); // zoe's aerial website code with murphatker email login to formspree
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

  const adjust_textarea = evt => {
    evt.target.style.height = "20px";
    evt.target.style.height = (evt.target.scrollHeight)+"px";
  }

  

  return (
    <div className="AdditionalInformation">
      <div className="AdditionalInformation-description" id='AdditionalInformation-description'>
        Contact us to allow us to get started integrating the chatbot into your site!
      </div>
      <form className="AdditionalInformation-form" onSubmit={submitForm}>
        <label htmlFor="name" className="AdditionalInformation-name-label">Name:</label> <input type="text" name="name" className="AdditionalInformation-name"/>
        <label htmlFor="email" className="AdditionalInformation-email-label">Email:</label> <input type="text" name="email" className="AdditionalInformation-email"/>
        <label htmlFor="message" className="AdditionalInformation-message-label">Message:</label> <textarea type="text" name="message" rows="5" cols="20" onKeyUp={adjust_textarea} className="AdditionalInformation-message"></textarea>
        <button type="submit" value="submit" name="submit" className="btn2 btn2--green">Submit</button>
        { formSubmitted === null ? (null) : formSubmitted ? <div className="UserSuccess">Success, Email was sent!</div> : <div className="UserError">Error</div>}
      </form>
      
    </div>
  );
}

export default ContactForm;
