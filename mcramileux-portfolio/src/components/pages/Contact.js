//TO EDIT presented with the Contact section
//a contact form with fields for a name, an email address, and a message
import React, { useState} from 'react';
import '../../css/styles.css';

 function Contact() {

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleNameChange = (e) => {
    // Getting the value and name of the input which triggered the change
        setEmail(e.target.value);
      };
      
  const handleMessageChange = (e) => {
    // Getting the value and name of the input which triggered the change
        setMessage(e.target.value);
  };
  
  const handleSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  }

  //TO EDIT all below
    return (
        <div>
          <form className="form">
            <input
              value={email}
              name="email"
              onChange={handleNameChange}
              onMessage={handleMessageChange}
              type="email"
              placeholder="email"
            />
            <input
              value={name}
              name="name"
              onChange={handleNameChange}
              type="text"
              placeholder="name"
            />
            <input
              value={message}
              name="password"
              onChange={handleNameChange}
              type="password"
              placeholder="password"
            />
            <button type="button" onClick={handleSubmit}>Submit</button>
          </form>
          {/* {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )} */}
        </div>
      );
    }

    export default Contact;
