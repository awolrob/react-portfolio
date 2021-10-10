import React from 'react';
import { MDBCard, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function ProjectCard(props) {
  console.log(props);
  return (
    <MDBCol md='6' className="p-4">
      <MDBCard
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className='hide d-flex align-items-center py-5 px-4' >
          <div>
            <h3>
              {props.name}
              <a href={props.githubLink} target="_blank" className="px-2"              >
                <MDBIcon className="hide"  fab icon="github" />
              </a>
            </h3>
            <p>{props.techUsed}</p>
            <a href={props.deployLink} target="_blank"             >
               <p className="hide">View Deployed App</p>
            </a>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;
