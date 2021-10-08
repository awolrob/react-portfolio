import React from 'react';
import coverImage from '../../assets/images/imageedit_1_5111650247.png';
import robImage from '../../assets/images/Rob.png';

function About() {
  return (
    <section className="">
      <div className="container" >
        <div className="row">
          <div className="col-md-12" style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}>
            <h1 id="about" className="text-lg-center">About Me</h1>
            <div className="row">
              <div className="col-md-3">
                <div className="flex-row justify-content-center ">
                  <img
                    src={robImage}
                    alt="cover"
                  />
                  <p>Rob Ellingson</p>
                </div>
              </div>
              <div className="col-md-9">
                <p>
                  Full Stack Web Developer with the passion to bring experiences from an in-house Visual Basic / Access database
                  environment to a modern full stack enterprise environment. I am accustomed to pushing comfort zones to achieve
                  positive results.
                </p>
                <br />
                <p>
                  Having created a diverse and proven technical skill set and IT background, I chose to push my
                  comfort zone once again to participate in the Full Stack Web Development boot camp program at CWRU to broaden my
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
                  I am excited to leverage my existing skill set and background with my
                  new Full Stack Web Development skill set to participate in building mission critical applications for the organization
                  which I affiliate.
                </p>
                <br />

                <div >
                  <p style={{ fontSize: ".75em", textAlign: "right" }}>Define your life, not your comfort zone!</p>
                </div>

              </div>
              {/* <div className="col-md-12">
                <img
                  src={coverImage}
                  style={{opacity: "0.25"}}
                  className="img-fluid"
                  alt="cover"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section >
    // <ImageBackground source={require({ coverImage })} style={{ width: '100%', height: '100%' }}>
    //   <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Centered text</Text>
    //   </View>
    // </ImageBackground>

  );
}

export default About;
