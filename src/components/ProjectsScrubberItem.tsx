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
  const keyArtworkImagePath = `/images/work/${encodeURIComponent(
    projectName.toLowerCase(),
  )}/keyArtwork.webp`;

  return (
    <div
      className={`group flex max-w-[520px] cursor-pointer flex-col ${className}`.trim()}
      onClick={() =>
        (window.location.href = `/work/${encodeURIComponent(
          projectName.toLowerCase(),
        )}`)
      }
    >
      <div className="flex flex-col">
        <h3 className="text-neutral-900 font-medium">{project.name}</h3>
        <p className="text-sm text-neutral-500">
          {project.startDate} &#x2192; {project.endDate}
        </p>
      </div>
      <figure>
        <Image
          src={image.src}
          alt={image.caption}
          width={image.width}
          height={image.height}
          className="rounded-md shadow-projectImage"
        />
      </figure>
    </div>
  );
};

export default ProjectsScrubberItem;
