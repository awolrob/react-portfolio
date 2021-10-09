import React from 'react';
import '../../assets/styles/ProjectCardStyle.css'

// Props are passed through our functional component.
function ProjectCard(props) {
  return (
    <div className="cardProject">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        {/* <img alt={props.name} src={`url(${props.image})`} /> */}
        {/* <img alt={props.name} src={require(`${props.image}`).default} /> */}
        {/* {require(`../../assets/small/${category}/${i}.jpg`).default */}
      </div>
      {/* <div className="content"> */}
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      {/* </div> */}
      {/* The onClick method will invoke the removeFriends function passing through the value of props.id  */}
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ProjectCard;
