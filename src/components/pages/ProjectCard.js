import React from 'react';
import {
  MDBCard,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardBody
} from 'mdb-react-ui-kit';

// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <MDBCol className="p-4 col-auto DivForHoverItem" >
      <MDBCard
        style={{
          backgroundImage: `url(${require(`../../assets/images/${props.image}`).default})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "22rem",
          height: "22rem"
        }}
        className="shadow-box hoverable" >
        <MDBCardBody className="HiddenText">
          <MDBCardTitle>
            {props.name}
            <a href={props.githubLink} target="_blank" rel="noreferrer" className="px-2"              >
              <MDBIcon fab icon="github" />
            </a>
          </MDBCardTitle>
          <p style={{ color: "smokewhite" }} >
            {props.techUsed}
          </p>
          <a href={props.deployLink} target="_blank" rel="noreferrer">
            <p  >View Deployed App</p>
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBCol >
  );
}

export default ProjectCard;