import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <MDBCol md='6' className="p-4">
      <MDBCard 
        // className='card-image shadow hoverable'
        style={{
          backgroundImage:
            // "url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"

        }}
      >
        <div className='text-white d-flex align-items-center invisible py-5 px-4'>
          <div>
            <h5 className='pink-text'>
              <MDBIcon icon='chart-pie' /> Marketing
            </h5>
            <MDBCardTitle tag='h3' className='pt-2'>
              <strong>This is card title</strong>
            </MDBCardTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit
              officia accusamus minus error nisi architecto nulla ipsum
              dignissimos. Odit sed qui, dolorum!
            </p>
            <MDBBtn color='pink'>
              <MDBIcon icon='clone left' /> View project
            </MDBBtn>
          </div>
        </div>
      </MDBCard>
    </MDBCol>

    // <div className="cardProject">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //     {/* <img alt={props.name} src={`url(${props.image})`} /> */}
    //     {/* <img alt={props.name} src={require(`${props.image}`).default} /> */}
    //     {/* {require(`../../assets/small/${category}/${i}.jpg`).default */}
    //   </div>
    //   {/* <div className="content"> */}
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Occupation:</strong> {props.occupation}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   {/* </div> */}
    //   {/* The onClick method will invoke the removeFriends function passing through the value of props.id  */}
    //   <span onClick={() => props.removeFriend(props.id)} className="remove">
    //     𝘅
    //   </span>
    // </div>
  );
}

export default ProjectCard;
