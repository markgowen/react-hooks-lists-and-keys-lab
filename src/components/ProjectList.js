import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const item = projects.map((projItem) => {
    return <ProjectItem 
      key={projItem.id} 
      name={projItem.name} 
      about={projItem.about} 
      technologies={projItem.technologies} 
    />
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {item}
      </div>
    </div>
  );
}

export default ProjectList;
