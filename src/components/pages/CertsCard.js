import React from 'react';
import { MDBCard, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// Props are passed through our functional component.
function ProjectCard(props) {
  console.log(props);
  return (
    <MDBCol className="p-4 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <MDBCard>
        <img
          src={require(`../../assets/images/${props.image}`).default}
        />
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;