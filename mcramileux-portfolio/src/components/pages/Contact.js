//TO EDIT presented with the Contact section
//a contact form with fields for a name, an email address, and a message

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


import React, { useState} from 'react';
import './Contact.css';

export default function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [sentMessage, setMessageSent] = useState(false);
  
  const handleNameChange = (e) => {
        setEmail(e.target.value);
        setErrorName(false);
  };
  
  const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setErrorMessage(false);
  };

  const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorEmail(false);
  };
  
  // Validate the email provide using regex
  const validateEmail = (email) => {
    return /^[\w\.-]+@[\w\.-]+\.\w+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (name.length <= 3) {
      setErrorName(true);
      valid = false;
    }

    if (!validateEmail(email)) {
      setErrorEmail(true);
      valid = false;
    }

    if (message.length < 30) {
      setErrorMessage(true);
      valid = false;
    }

    if (valid) {
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName('');
    setMessage('');
    setEmail('');
    setMessageSent(true);
  }
};

    return (
      <section id='contact'>
        <div className='container-contact text-center'>
          <div className='row'>
            <div className="col-md-12">

              <h1 className='contact-title'>Contact Me</h1>
                {sentMessage && (
                  <div className="alert alert-success" role="alert">
                    "Thank you for contacting me! I have received your message and will get back to you as soon as possible."
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        className={`form-control ${errorName ? 'is-invalid' : ''}`}
                        id="name"
                        value={name}
                        onChange={(e) => setName(handleNameChange)}
                      />
                        {errorName && (
                         <div className="invalid-feedback">Please enter your name</div>
                        )}
                        </div>

                <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(handleEmailChange)}
                />
                  {errorEmail && (
                  <div className="invalid-feedback">Please enter a valid email address</div>
                  )}
                </div>
              
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                id="message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(handleMessageChange)}
                ></textarea>
                {errorMessage && (
                  <div className="invalid-feedback"> Message must be at least 30 characters</div>
                )}
                </div>

                {/* <button type='submit' onClick={handleSubmit}>Submit</button> */}
                <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
            {/* {setMessageSent && (
              <div className="alert alert-success mt-3" role="alert">
                Your message has been sent. Thank you!
              </div>
            )} */}
            </div>
        </div>
        </div>
      </section>
      );
    }