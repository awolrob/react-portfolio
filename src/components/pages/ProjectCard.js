
import React from 'react';
import { MDBCard, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

// Props are passed through our functional component.
function ProjectCard(props) {
  console.log(props);
  return (
    <MDBCol className="p-4 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <MDBCard 
      style={{
        backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
        background: "linear-gradient(rgba(0, 0, 0, -0.5), rgba(0, 0, 0, 0.5)), url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
        // backgroundImage: `url(../../assets/images/${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >
          <img
            src={require(`../../assets/images/${props.image}`).default}
          />

        <div className=' d-flex align-items-center py-5 px-4' >
          <div>
            <h3>
              {props.name}
              <a href={props.githubLink} target="_blank" className="px-2"              >
                <MDBIcon className="hide" fab icon="github" style={{color: "black"}}/>
              </a>
            </h3>
            <p>{props.techUsed}</p>
            <a href={props.deployLink} target="_blank"             >
              <p className="hide" style={{color: "black"}}>View Deployed App</p>
            </a>
          </div>
        </div>
      </MDBCard>
    </MDBCol>
  );
}

export default ProjectCard;