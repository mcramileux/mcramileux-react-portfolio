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

// In the meantime, consider including your email address and phone number on the Contact page. --DONE


import React, { useState} from 'react';
import './Contact.css';

import { validateEmail } from '../../utils/helpers.js';

export default function Contact() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

  // Based on the input type, we set the state of either email, username, and password
  if (inputType === 'name') {
    setFullName(inputValue);
  } else if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'message') {
    setMessage(inputValue);
  }
};

  // Submit the form
  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    
    if (!fullName ) {
      setErrorMessage('Please enter your name!');
      return;
    }
    if (!email ) {
      setErrorMessage('Your email is required!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Your email is invalid! Please enter your valid email address');
      return;
    }
    if (!message) {
      setErrorMessage(
        `Please enter your message ${fullName}!`
      );
      return;
    };

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    console.log(`Name: ${fullName}, Email: ${email}, Message: ${message}`);
    setFullName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
    setMessageSent('');
};

  return (
      <section id='contact'>
        <div className='container-contact text-center'>
          <div className='row justify-content-center'>
              <h1 className='contact-title'>Contact Me</h1>
                <p className="text-muted mb-5"> Do you want to collaborate with me?. 
                  Please do not hesitate to contact me directly. 
                  I will come back to you within a matter of hours to help you.
                </p>
                
                <ul className="contact-info-list text-muted mb-5">
                  <li>📧 mcramileux@gmail.com</li>
                  <li>☎️ +61 0484 622 654</li>
                  <li>🇦🇺 Cairns, Queensland</li>
                </ul>
              <hr className="contact-divider" />

                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                  <div className="col-md-6 mx-auto">
                    <form onSubmit={handleSubmit}>

                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                        <div className="form-floating mb-3">
                          <input type='text' id='name' name='name' value={fullName}
                            onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address:</label>
                        <div class="form-floating mb-3">
                          <input type="email" id="email" name='email' value={email}
                            onChange={handleInputChange} />
                        </div>
                    </div>
              
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                        <div class="form-floating mb-3">
                          <textarea id="message" name='message' rows="5" value={message}
                            onChange={handleInputChange}>
                          </textarea>
                        
                        {errorMessage && (
                          <div className="invalid-feedback"> Message must be at least 30 characters</div>
                            )}
                            </div>
                          </div>

                    <button type="submit" className="btn btn-info">
                      Submit
                      </button>
                    </form>

                        {messageSent && (
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
