import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Clothing suggestions Website",
    description: "project 1 description",
    image: "images/projects/weather-project.jpg",
    tag: ["All, Web"],
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2>My Project</h2>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
