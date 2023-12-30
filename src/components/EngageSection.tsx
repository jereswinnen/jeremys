import React from "react";
import { projects, ProjectImage } from "../lib/projects";
import Image from "next/image";
import CanvasNoise from "./CanvasNoise";

type EngageSectionProps = {
  projectName: string;
  imageIndex: number;
  className?: string;
};

const EngageSection: React.FC<EngageSectionProps> = ({
  projectName,
  imageIndex,
  className = "",
}) => {
  const project = projects.find((p) => p.name === projectName);
  if (!project || project.images.length <= imageIndex) {
    return null;
  }
  const image: ProjectImage = project.images[imageIndex];

  return (
    <section className="layoutInner relative bg-red-200">
      <div className="layoutInner progressiveBlurEngage relative col-span-full -mb-[60px] bg-blue-200">
        <div className="col-span-4 col-start-3 bg-blue-300">
          <figure className="perspectiveLarge relative">
            <div className="progressiveBlur hidden rounded-md"></div>
            <div className="absolute inset-0 z-[2]">
              <CanvasNoise className="h-full rounded-md" />
            </div>
            <Image
              src={image.src}
              alt={image.caption}
              width={image.width}
              height={image.height}
              className="rounded-md shadow-projectImage"
            />
          </figure>
        </div>
      </div>
      <div className="z-10 col-span-4 col-start-3 bg-blue-400">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatibus ea quas facilis quaerat nulla architecto provident
          dignissimos odit molestiae ut, harum nesciunt tempora omnis culpa
          neque reprehenderit, saepe voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatibus ea quas facilis quaerat nulla architecto provident
          dignissimos odit molestiae ut, harum nesciunt tempora omnis culpa
          neque reprehenderit, saepe voluptate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          voluptatibus ea quas facilis quaerat nulla architecto provident
          dignissimos odit molestiae ut, harum nesciunt tempora omnis culpa
          neque reprehenderit, saepe voluptate.
        </p>
      </div>
    </section>
  );
};

export default EngageSection;
