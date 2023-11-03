import React, { useState } from 'react';

function ContactForm() {
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false });

  const submitForm = (evt) => {
    evt.preventDefault();
    setFormStatus({ submitted: true, success: false }); // Set as submitted initially

    const form = evt.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/xjvqzwdq", {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({ submitted: true, success: true });
        form.reset();
      } else {
        setFormStatus({ submitted: true, success: false });
      }
    })
    .catch(() => setFormStatus({ submitted: true, success: false }));
  }

  const adjust_textarea = (evt) => {
    evt.target.style.height = '20px';
    evt.target.style.height = `${evt.target.scrollHeight}px`;
  }

  return (
    <div className="AdditionalInformation">
      <div className="AdditionalInformation-description" id='AdditionalInformation-description'>
        Contact us to get started integrating AI chatbots into your website!
      </div>
      <form className="AdditionalInformation-form" onSubmit={submitForm}>
        <label htmlFor="name" className="AdditionalInformation-name-label">Name:</label>
        <input type="text" name="name" className="AdditionalInformation-name"/>
        <label htmlFor="email" className="AdditionalInformation-email-label">Email:</label>
        <input type="email" name="email" className="AdditionalInformation-email"/> {/* Changed type to email */}
        <label htmlFor="message" className="AdditionalInformation-message-label">Message:</label>
        <textarea name="message" onKeyUp={adjust_textarea} className="AdditionalInformation-message"></textarea>
        <button type="submit" className="btn2 btn2--green">Submit</button>
        { formStatus.submitted && (
          formStatus.success ? <div className="UserSuccess">Success, Email was sent!</div> : <div className="UserError">Error</div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
