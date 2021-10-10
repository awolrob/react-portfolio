import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import projects from '../../assets/projectData.json'

function Project() {
  const [projectList, setprojectList] = useState(projects);
  const removeFriend = id => {
    const newList = projectList.filter(project => project.id !== id);
    setprojectList(newList);
  };

  return (
    <Wrapper>
      <h1 style={{
        width: "100%",
        textAlign: "center"
      }}>Projects By Rob Ellingson's</h1>
      {/* Map through 'projectList' and render a 'ProjectCard' for each project */}
      {projectList.map(project => (
        <ProjectCard
          removeFriend={removeFriend}
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          deployLink={project.deployLink}
          githubLink={project.githubLink}
          techUsed={project.techUsed}
        />
      ))}
    </Wrapper>
  );
}

export default Project;
