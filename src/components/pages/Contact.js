import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form"  className="form-outline" onSubmit={handleSubmit}>
        <div className="form-outline">
          {/* <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} /> */}
          <MDBInput label='Name' id='name' name="Name" type='text' defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-outline">
          {/* <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} /> */}
          <MDBInput label='Email address:' name="Email address" id='typeEmail' type='email' defaultValue={email} onBlur={handleChange}/>
        </div>
        <div className="form-outline">
          {/* <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} /> */}
          <MDBInput label='Message:' name="A message"  id='textAreaExample' textarea rows={4} defaultValue={message} onBlur={handleChange}/>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text form-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
