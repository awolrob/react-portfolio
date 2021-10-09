import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from 'mdb-react-ui-kit';

const ContactPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="lg-0 mb-4">
          <div className="form-header blue accent-1">
            <h3 className="mt-2">
              <MDBIcon icon="envelope" /> Contact me today!
            </h3>
          </div>
          <div className="md-form">
            <MDBInput
              icon="user"
              label="Your name"
              iconClass="grey-text"
              type="text"
              id="form-name"
            />
          </div>
          <div className="md-form">
            <MDBInput
              icon="envelope"
              label="Your email"
              iconClass="grey-text"
              type="text"
              id="form-email"
            />
          </div>
          <div className="md-form">
            <MDBInput
              icon="tag"
              label="Subject"
              iconClass="grey-text"
              type="text"
              id="form-subject"
            />
          </div>
          <div className="text-center">
            <MDBBtn color="light-blue">Submit</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactPage;