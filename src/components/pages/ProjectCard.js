
import React from 'react';
import { MDBCard, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import image1 from "../../assets/images/BingeBucket.JPG";
import image2 from "../../assets/images/CanICamp.jpeg";
import image3 from "../../assets/images/18-nosql-challenge.gif";
import image4 from "../../assets/images/food-festival.PNG";
import image5 from "../../assets/images/weather-dashboard.PNG";
import image6 from "../../assets/images/budget-tracker.PNG";
import image7 from "../../assets/images/robot-gladiators.JPG";
import image8 from "../../assets/images/BottegeHTMLCSS.JPG";
import image9 from "../../assets/images/Oven-Charts.gif";
import image10 from "../../assets/images/PwrPlus.JPG";
import image11 from "../../assets/images/NorlakeMfg.JPG";
import image12 from "../../assets/images/KalronLLC.JPG";

// Props are passed through our functional component.
function ProjectCard(props) {
  console.log(props);
  return (
    <MDBCol className="p-4 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <MDBCard
        style={{
          // backgroundImage: `url('${image1}')`,
          // backgroundImage: `url('${props.image}')`,
          // backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
          // background: "linear-gradient(rgba(0, 0, 0, -0.5), rgba(0, 0, 0, 0.5)), url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",

          background: "linear-gradient( rgba(0, 0, 0, -0.5), rgba(0, 0, 0, 0.5) ), "+`url('${image1}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
      >
        {/* <img
            src={require(`../../assets/images/${props.image}`).default}
          /> */}

        <div className=' d-flex align-items-center py-5 px-4' >
          <div>
            <h3>
              {props.name}
              <a href={props.githubLink} target="_blank" className="px-2"              >
                <MDBIcon size="xs" className="hide" fab icon="github" style={{ color: "black" }} />
              </a>
            </h3>
            <p>{props.techUsed}</p>
            <a href={props.deployLink} target="_blank"             >
              <p className="hide" style={{ color: "black" }}>View Deployed App</p>
            </a>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;