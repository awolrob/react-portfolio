import React from 'react';
// import { MDBCard, MDBCol, MDBIcon } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';

// Props are passed through our functional component.
function ProjectCard(props) {
  console.log(props);
  return (
    <MDBCol className="p-4 col-auto">
      <MDBCard style={{ width: "22rem" }} >
        <MDBCardImage className="view hm-zoom img-fluid shadow-box hoverable" 
        src={require(`../../assets/images/${props.image}`).default}
           />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;