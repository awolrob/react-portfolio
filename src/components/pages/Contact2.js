import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';

const ContactPage = () => {
  return (
    <section>
      <MDBRow>
        <MDBCol lg="12" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header ">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Contact me today!
                </h3>
              </div>
              <div className="md-form">
                <MDBInput
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
              <MDBBtn rounded color="blue">
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </section>
  );
}

export default ContactPage;