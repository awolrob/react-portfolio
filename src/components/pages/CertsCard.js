import React from 'react';
// import { MDBCard, MDBCol, MDBIcon } from 'mdbreact';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdb-react-ui-kit';

// Props are passed through our functional component.
function ProjectCard(props) {
  console.log(props);
  return (
    // <MDBCol sm="" className="p-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
    //   <MDBCard>
    //     <img
    //       src={require(`../../assets/images/${props.image}`).default}
    //     />
    //   </MDBCard>
    // </MDBCol>
    <MDBCol className="p-4 col-auto">
      <MDBCard>
        <MDBCardImage fluid className="img-fluid shadow-box-example hoverable" src={require(`../../assets/images/${props.image}`).default}
           />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          {/* <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <MDBBtn href="#">Click</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;