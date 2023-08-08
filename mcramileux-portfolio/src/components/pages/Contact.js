//TO EDIT presented with the Contact section
//a contact form with fields for a name, an email address, and a message ---DONE

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message ---DONE

// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required ---DONE

// WHEN I move my cursor out of one of the form fields without entering text ---DONE
// THEN I receive a notification that this field is required

// WHEN I enter text into the email address field ---DONE
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
  
  // Name in the input changes
  const handleNameChange = (e) => {
        setName(e.target.value);
        setErrorName(false);
  };
  
  // Message in the input changes
  const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setErrorMessage(false);
  };

  // Email in the input changes
  const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorEmail(false);
  };
  
  // Validate the email provide using regex
  const validateEmail = (email) => {
    return /^[\w\.-]+@[\w\.-]+\.\w+$/.test(email);
  };

  // Submit the form
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
          <div className='row justify-content-center'>
              <h1 className='contact-title'>Contact Me</h1>
               <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
               <div className="col-md-6 mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                        <div class="form-floating mb-3">
                        <input
                          type="text"
                          className={`form-control ${errorName ? 'is-invalid' : ''}`}
                          id="name"
                          value={name}
                          onChange={handleNameChange}
                        />
                          {errorName && (
                          <div className="invalid-feedback">Please enter your name</div>
                          )}
                          </div>
                      </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                        {errorEmail && (
                        <div className="invalid-feedback">Please enter a valid email address</div>
                        )}
                      </div>
                    </div>
              
                   <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <div class="form-floating mb-3">
                      <textarea
                      className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                      id="message"
                      rows="5"
                      value={message}
                      onChange={handleMessageChange}
                      ></textarea>
                        {errorMessage && (
                        <div className="invalid-feedback"> Message must be at least 30 characters</div>
                        )}
                        </div>
                    </div>
                      {/* <button type='submit' onClick={handleSubmit}>Submit</button> */}
                      <button type="submit" className="btn btn-info">
                      Submit
                      </button>
                  </form>
                  {sentMessage && (
                  <div className="alert alert-success" role="alert">
                    "Thank you for contacting me! I have received your message and will get back to you as soon as possible."
                  </div>
                )}
                
          </div>
        </div>
      </div>
      </div>
    
    </section>
  );
}