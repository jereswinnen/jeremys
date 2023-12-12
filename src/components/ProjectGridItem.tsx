import React from "react";
import Image from "next/image";
import { projects } from "../lib/projects";

type ProjectGridItemProps = {
  projectName: string;
  imageIndex: number;
  className?: string;
};

const ProjectGridItem: React.FC<ProjectGridItemProps> = ({
  projectName,
  imageIndex,
  className,
}) => {
  // Find the project by name
  const project = projects.find((p) => p.name === projectName);
  if (!project) {
    return <div>Project not found</div>; // Project not found error state
  }
  // Get the specific image from the project
  const image = project.images[imageIndex];
  if (!image) {
    return <div>Image not found</div>; // Project image not found error state
  }

  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <figure className="relative">
        <Image src={image.src} alt={`Project image`} width={500} height={300} />
        <figcaption>
          <p>{image.caption}</p>
        </figcaption>
      </figure>
      <footer>
        <a href={`/projects/${encodeURIComponent(projectName)}`}>
          {project.name}
        </a>
        <p>{project.description}</p>
      </footer>
    </div>
  );
};

export default ProjectGridItem;
