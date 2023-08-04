//TO EDIT presented with the Contact section
//a contact form with fields for a name, an email address, and a message
import React, { useState} from 'react';
import '.src/assets/css/styles.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

export default function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleNameChange = (e) => {
    // Getting the value and name of the input which triggered the change
        setEmail(e.target.value);
        setEmailError(false);
      };
      
  const handleMessageChange = (e) => {
    // Getting the value and name of the input which triggered the change
        setMessage(e.target.value);
        setMessageError(false);
  };
  

    // Based on the input type, we set the state of either name, email, or message
    if (inputType === 'name' && !inputValue) {
      setErrorMessage('Name is required!');
    } else if (inputType === 'email' && !inputValue) {
      setErrorMessage('Email is required!');
    } else if (inputType === 'message' && !inputValue) {
      setErrorMessage('Message is required!');
    }
  };
  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }
    if (!checkPassword(password)) {
        setErrorMessage(
          `Choose a more secure password for the account`);
        return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setPassword('');
    setEmail('');
    setErrorMessage('');
  };

  //TO EDIT all below
    return (
        <div>
          <form className="form">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onMessage={handleMessageChange}
              type="email"
              placeholder="email"
            />
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="username"
            />
            <input
              value={password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="password"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      );
    }

    export default Contact;
