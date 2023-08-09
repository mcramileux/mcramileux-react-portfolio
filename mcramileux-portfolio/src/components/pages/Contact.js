import React, { useState} from 'react';
import './Contact.css';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullNameError(false);
    setEmailError(false);
    setMessageError(false);


    if (fullName === '') {
      setFullNameError(true);
      return;
    }

    const validateEmail = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (!validateEmail.test(email)) {
      setEmailError(true);
      return;
    }
    if (message === '') {
      setMessageError(true);
      return;
    }

    console.log(`Name: ${fullName}, Email: ${email}, Message: ${message}`);
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName('');
    setEmail('');
    setMessage('');
    setMessageError('');
    setSentMessage(true);
};

  return (
    <section style={{height:'1050px'}} id='contact'>
      <div className='container-contact px-4 py-4 px-lg-5 py-lg-5 bg-white rounded'>
        <div className='row gx-4 gx-lg-5 justify-content-center mx-auto'>
          <div className='col-lg-8 col-xl-6 text-center'> 
          <h1 className='contact-title'>Contact Me</h1>
            <p className='text-muted mb-5'> 
              Do you want to collaborate with me?
              Please do not hesitate to contact me directly.
              I will come back to you within a matter of hours to help you.
            </p>
                
            <ul className='contact-info-list text-muted mb-5 no-bullet-list'>
              <li>📧 mcramileux@gmail.com</li>
              <li>☎️ +61 0484 622 654</li>
              <li>🇦🇺 Cairns, Queensland</li>
            </ul>

            <hr className='contact-divider'/>

            {!sentMessage && (
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name'>Name:</label>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className={`form-control ${
                        fullNameError ? 'is-invalid' :''
                      }`}
                      id='name'
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {fullNameError && (
                      <div className='invalid-feedback'>
                        Please enter your name
                      </div>
                    )}
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email address:</label>
                  <div className='form-floating mb-3'>
                    <input
                      type='email'
                      className={`form-control ${
                        emailError ? 'is-invalid' : ''
                      }`}
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <div className='invalid-feedback'>
                        Please enter a valid email address
                      </div>
                    )}
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='message'>Message:</label>
                  <div className='form-floating mb-3'></div>
                  <textarea 
                    className={`form-control ${
                      messageError ? 'is-invalid' : ""
                    }`}
                    id='message'
                    rows='5'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {messageError && (
                    <div className='invalid-feedback'>
                      Please enter your message
                    </div>
                  )}
                </div>

                <button type='submit' className='btn btn-info' style={{fontSize: '20px', marginTop: '10px' }}>
                  Submit
                </button>
              </form>
            )}
            {sentMessage && (
              <div className='alert alert-success mt-3' role='alert'>
                "Thank you for contacting me! I have received your message and
                will get back to you as soon as possible."
              </div>
            )}
              </div>
            </div>
        </div>
    </section>
  );
}