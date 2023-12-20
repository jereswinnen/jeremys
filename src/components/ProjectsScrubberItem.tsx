import React from "react";
import Image from "next/image";
import { projects } from "../lib/projects";

type ProjectsScrubberItemProps = {
  projectName: string;
  imageIndex: number;
  className?: string;
};

const ProjectsScrubberItem: React.FC<ProjectsScrubberItemProps> = ({
  projectName,
  imageIndex,
  className = "",
}) => {
  // Find the project by name
  const project = projects.find((p) => p.name === projectName);
  if (!project) {
    return <div>Project not found</div>; // Or handle this case as you see fit
  }

  // Get the specific image from the project
  const image = project.images[imageIndex];
  if (!image) {
    return <div>Image not found</div>; // Or handle this case as you see fit
  }

  // Construct the path for the master.webp image
  const masterImagePath = `/images/work/${encodeURIComponent(
    projectName.toLowerCase(),
  )}/master.webp`;

  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <div
        style={{ backgroundImage: `url('${masterImagePath}')` }}
        className={`bg-cover bg-center p-8`}
      >
        <figure className="relative">
          <Image
            src={image.src}
            alt={`Project image`}
            width={1000}
            height={600}
          />
          <figcaption>
            <p>{image.caption}</p>
          </figcaption>
        </figure>
      </div>
      <footer>
        <a href={`/projects/${encodeURIComponent(projectName)}`}>
          {project.name}
        </a>
        <p>{project.description}</p>
      </footer>
    </div>
  );
};

export default ProjectsScrubberItem;
