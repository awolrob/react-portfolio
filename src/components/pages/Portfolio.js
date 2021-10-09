import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import projects from '../../assets/projectData.json'

function Portfolio() {
  // Using useState, declare a new state variable 'projectList' and set it to the 'friends' array from 'friends.json'
  const [projectList, setprojectList] = useState(projects);

  // Create a method 'removeFriend()' that takes in 'id' and filters through 'projectList'
  // Update the state with the new friends list.
  const removeFriend = id => {
    const newList = projectList.filter(project => project.id !== id);
    setprojectList(newList);
  };

  return (
    <Wrapper>
      <h1 style={{
        width: "100%",
        textAlign: "center",
        marginBottom: "50px"
      }}>Rob Ellingson's Projects</h1>
      {/* Map through 'projectList' and render a 'ProjectCard' for each project */}
      {/* Pass in the 'removeFriend()' method and each property of a friend */}
      {projectList.map(project => (
        <ProjectCard
          removeFriend={removeFriend}
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          occupation={project.occupation}
          location={project.location}
        />
      ))}
    </Wrapper>
  );
}

export default Portfolio;
