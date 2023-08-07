//TO EDIT presented with the Contact section
//a contact form with fields for a name, an email address, and a message
import React, { useState} from 'react';
// import '../../css/styles.css';
import './Contact.css';

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
    return (
      <section id='contact'>
        <div className='container-contact text-center'>
          <h1 className='contact-title'>Contact Me</h1>
            <form className='form'>
              <input
              value={name}
              name='name'
              onChange={handleNameChange}
              type='name'
              placeholder='name'
              />
              <input
              value={email}
              name='email'
              onChange={handleNameChange}
              onMessage={handleMessageChange}
              type='email'
              placeholder='accountname@email.com'
              />
              <input
              value={message}
              name='message'
              onChange={handleNameChange}
              type='message'
              placeholder='please type your message'
              />
              <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
          {/* {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )} */}
          </div>
      </section>
      );
    }

    export default Contact;