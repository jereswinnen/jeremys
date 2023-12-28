import React from "react";
import Image from "next/image";
import { projects } from "../lib/projects";
import Action from "./Action";
import { ArrowRight } from "@phosphor-icons/react";

type ProjectsScrollerItemProps = {
  projectName: string;
  imageIndex: number;
  className?: string;
};

const ProjectsScrollerItem: React.FC<ProjectsScrollerItemProps> = ({
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

  return (
    <div
      className={`group flex max-w-[520px] shrink-0 cursor-pointer flex-col gap-4 ${className}`.trim()}
      onClick={() =>
        (window.location.href = `/work/${encodeURIComponent(
          projectName.toLowerCase(),
        )}`)
      }
    >
      <div className="ease-in-out-circ duration-normal flex translate-y-5 flex-col opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 group-hover:delay-75">
        <h3 className="text-neutral-900 font-medium">{project.name}</h3>
        <p className="text-sm text-neutral-500">
          {project.startDate} &#x2192; {project.endDate} {image.caption}
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <Action
          label="View project"
          icon={<ArrowRight weight="bold" size={18} />}
          iconPosition="reverse"
          className="ease-in-out-circ duration-normal absolute z-10 translate-y-2.5 opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 group-hover:delay-200"
        />
        <figure className="progressiveBlur">
          <Image
            src={image.src}
            alt={image.caption}
            width={image.width}
            height={image.height}
            className="ease-in-out-circ duration-normal origin-[bottom_center] rounded-md shadow-projectImage group-hover:scale-[1.0215]"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProjectsScrollerItem;
