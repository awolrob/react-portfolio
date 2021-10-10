import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Wrapper from './Wrapper';
import projects from '../../assets/projectData.json'

// import image1 from "../../assets/images/BingeBucket.JPG";
// import image2 from "../../assets/images/CanICamp.jpeg";
// import image3 from "../../assets/images/18-nosql-challenge.gif";
// import image4 from "../../assets/images/food-festival.PNG";
// import image5 from "../../assets/images/weather-dashboard.PNG";
// import image6 from "../../assets/images/budget-tracker.PNG";
// import image7 from "../../assets/images/robot-gladiators.JPG";
// import image8 from "../../assets/images/BottegeHTMLCSS.JPG";
// import image9 from "../../assets/images/Oven-Charts.gif";
// import image10 from "../../assets/images/PwrPlus.JPG";
// import image11 from "../../assets/images/NorlakeMfg.JPG";
// import image12 from "../../assets/images/KalronLLC.JPG";

function Project() {
  const [projectList] = useState(projects);

  return (
    <Wrapper>
      <h1 style={{
        width: "100%",
        textAlign: "center"
      }}>Projects By Rob Ellingson's</h1>
      {/* Map through 'projectList' and render a 'ProjectCard' for each project */}
      {projectList.map(project => (
        <ProjectCard
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
