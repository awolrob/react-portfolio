import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";

function About() {
  return (
    <MDBContainer fluid >
      <MDBCol lg="10" className="py-3">
        <h1 id="about" className="text-lg-left">Resume</h1>
        <MDBRow className="col-md-9">
          <p className="pr-2 text-lg-left">Download And Review My Resume :  </p>
          <a
            href="https://drive.google.com/file/d/1WqveNJ7MUlYVIpCtFMSN1J7PSXt1NPmL/view?usp=sharing"
            target="_blank"
            className="text-lg-left">
            <span> <MDBIcon icon="file-download" /></span>
          </a>
        </MDBRow>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="md-4">
              <h5>Front-end Proficiencies</h5>
              <ul className="fa-ul">
                <li><MDBIcon icon="code" list />  HTLM</li>
                <li><MDBIcon icon="code" list />  CSS</li>
                <li><MDBIcon icon="code" list />  JavaScript</li>
                <li><MDBIcon icon="code" list />  jQuery</li>
                <li><MDBIcon icon="code" list />  Responsive Design</li>
                <li><MDBIcon icon="code" list />  React</li>
                <li><MDBIcon icon="code" list />  Bootstrap</li>
                <li><MDBIcon icon="code" list />  Material Design for Bootstrap</li>
                <li><MDBIcon icon="code" list />  Handlebars</li>
                <li><MDBIcon icon="code" list />  Local Storage, Session Storage, IndexedDB</li>
              </ul>
            </MDBCol>
            <MDBCol className="md-4">
              <h5>Back-end Proficiencies</h5>
              <ul className="fa-ul">
                <li><MDBIcon icon="code" list />  APIs</li>
                <li><MDBIcon icon="code" list />  Node</li>
                <li><MDBIcon icon="code" list />  Express</li>
                <li><MDBIcon icon="code" list />  MySQL, Sequelize</li>
                <li><MDBIcon icon="code" list />  MongoDB, Mongoose</li>
                <li><MDBIcon icon="code" list />  REST</li>
                <li><MDBIcon icon="code" list />  GraphQL</li>
                <li><MDBIcon icon="code" list />  MERN Stack</li>
                <li><MDBIcon icon="code" list />  Progressive Web Applications</li>
                <li><MDBIcon icon="code" list />  User Authentication</li>
              </ul>
            </MDBCol>
            <MDBCol className="md-4">
              <h5>Tools</h5>
              <ul className="fa-ul">
                <li><MDBIcon icon="code" list />  React Context API</li>
                <li><MDBIcon icon="code" list />  Stripe.js</li>
                <li><MDBIcon icon="code" list />  Visual Studio</li>
                <li><MDBIcon icon="code" list />  React Router</li>
                <li><MDBIcon icon="code" list />  MySQL Workbench</li>
                <li><MDBIcon icon="code" list />  Lighthouse</li>
                <li><MDBIcon icon="code" list />  Insomnia</li>
                <li><MDBIcon icon="code" list />  GitHub</li>
                <li><MDBIcon icon="code" list />  Webpack</li>
                <li><MDBIcon icon="code" list />  Concurrently</li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer >
      </MDBCol>
    </MDBContainer>
  );
}

export default About;
