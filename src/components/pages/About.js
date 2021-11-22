import React from 'react';
import coverImage from '../../assets/images/imageedit_1_5111650247.png';
import robImage from '../../assets/images/Rob.png';
import {
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';

function About() {
  return (
    <MDBContainer>
      <MDBContainer >
        <MDBRow>
          <MDBCol style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
            <h1 id="about" className="text-lg-left">About Me</h1>
            <MDBRow>
              <MDBCol>
                <div className="flex-row justify-content-center ">
                  <img
                    src={robImage}
                    alt="cover"
                  />
                  <p className="text-lg-center" >Rob Ellingson</p>
                </div>
              </MDBCol>
              <div className="col-md-9">
                <p>
                  Full Stack Web Developer with the passion to bring experiences from an in-house Visual Basic / Access database
                  environment to a modern full stack enterprise environment. I am accustomed to pushing comfort zones to achieve
                  positive results.
                </p>
                <br />
                <p>
                  Having created a diverse and proven technical skill set and IT background, I chose to push my
                  comfort zone once again to participate in the Full Stack Web Development boot camp program at <a href="https://bootcamp.case.edu/coding/"> Case Western Reserve University</a> to broaden my
                  technical skill set with challenging Full Stack technologies. Through the program I found I excel in JavaScript,
                  Node.js, jQuery and HTML.
                </p>
                <br />
                <p>
                  I have brought about new ideas and problem-solving techniques that have produced successful results in critical
                  manufacturing and banking applications.
                </p>
                <br />
                <p>
                  I am excited to leverage my existing skill set and background with my new Full Stack Web Development skill set to participate building mission critical applications for your organization.
                </p>
                <br />

                <div >
                  <p style={{ fontSize: "1em", textAlign: "right" }}>Define your life, not your comfort zone!</p>
                </div>

              </div>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer >
  );
}

export default About;
