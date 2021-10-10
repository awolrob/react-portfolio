import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { validateEmail } from '../../utils/helpers';

const ContactPage = () => {

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
      <MDBRow center >
        <MDBCol md="12" className="m-4 p-3">
          <MDBCard>
            <h1 data-testid="h1tag" className="px-3">Contact me</h1>
            <form id="contact-form" className="form-outline" onSubmit={handleSubmit}>
              <div className="form-outline px-3">
                {/* <label htmlFor="name">Name:</label> */}
                {/* <input type="text" name="name" defaultValue={name} onBlur={handleChange} /> */}
                <MDBInput label='Name:' id='name' name="Name" type='text' defaultValue={name} onBlur={handleChange} />
              </div>
              <div className="form-outline px-3">
                {/* <label htmlFor="email">Email address:</label> */}
                {/* <input type="email" name="email" defaultValue={email} onBlur={handleChange} /> */}
                <MDBInput label='Email address:' name="Email address" id='typeEmail' type='email' defaultValue={email} onBlur={handleChange} />
              </div>
              <div className="form-outline px-3">
                {/* <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} /> */}
                <MDBInput label='Message:' name="A message" id='textAreaExample' textarea rows={4} defaultValue={message} onBlur={handleChange} />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text form-text px-3">{errorMessage}</p>
                </div>
              )}
              <MDBBtn floating data-testid="button" type="submit">Submit</MDBBtn>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;