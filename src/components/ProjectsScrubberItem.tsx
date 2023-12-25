import React from "react";
import Image from "next/image";
import { projects } from "../lib/projects";
import Action from "./Action";
import { EyeClosed } from "@phosphor-icons/react";

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

  return (
    <div
      className={`group flex max-w-[520px] cursor-pointer flex-col gap-4 ${className}`.trim()}
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
      <div className="relative -mb-[20px] flex items-center justify-center">
        <Action
          label="View project"
          icon={<EyeClosed weight="duotone" size={22} />}
          className="ease-in-out-circ absolute z-10 translate-y-2.5 opacity-0 duration-[380ms] group-hover:-translate-y-0 group-hover:opacity-100"
        />
        <figure>
          <Image
            src={image.src}
            alt={image.caption}
            width={image.width}
            height={image.height}
            className="ease-in-out-circ rounded-md shadow-projectImage duration-[380ms] group-hover:opacity-60"
          />
        </figure>
      </div>
    </div>
  );
};

export default ProjectsScrubberItem;
