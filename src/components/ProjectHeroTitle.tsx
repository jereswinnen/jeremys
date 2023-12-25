import React, { useEffect, useRef } from "react";
import { projects, Project } from "../lib/projects";

type ProjectHeroTitleProps = {
  projectName: string;
};

const ProjectHeroTitle: React.FC<ProjectHeroTitleProps> = ({ projectName }) => {
  const project = projects.find((p) => p.name === projectName) as Project;

  return (
    <h1 className="textMask overflow-hidden text-[320px] text-transparent font-bold">
      {project.name}
      <div
        className="absolute left-0 top-0 h-full w-full bg-contain mix-blend-overlay brightness-75 saturate-150"
        style={{ backgroundImage: `url(${project?.keyImage.src})` }}
      ></div>
    </h1>
  );
};

export default ProjectHeroTitle;
