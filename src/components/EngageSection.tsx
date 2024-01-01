import React from "react";
import { projects, ProjectImage } from "../lib/projects";
import Image from "next/image";
import CanvasNoise from "./CanvasNoise";
import HeroTitle from "./HeroTitle";

type EngageSectionProps = {
  projectName: string;
  className?: string;
};

const EngageSection: React.FC<EngageSectionProps> = ({
  projectName,
  className = "",
}) => {
  const project = projects.find((p) => p.name === projectName);

  if (!project || !project.keyEngage) {
    return null;
  }

  const { keyEngage } = project;

  return (
    <section className="layoutInner relative bg-red-200">
      <div className="relative col-span-6 col-start-2 -mb-[var(--engageOverlap)] flex justify-center bg-green-200">
        <div className="radialGradientMask absolute inset-0 z-[2] h-[calc(100%_-_var(--engageOverlap))]"></div>
        <div className="absolute inset-0 z-[1] bg-green-400/50">
          <CanvasNoise className="h-full rounded-md" />
        </div>
        <HeroTitle text="Work with me" />
      </div>
      <div className="layoutInner progressiveBlurEngage relative z-[3] col-span-full -mb-[var(--engageOverlap)] bg-blue-200">
        <div className="col-span-6 col-start-2 bg-blue-300">
          <figure className="perspectiveLargo relative">
            <div className="progressiveBlur rounded-md"></div>
            <div className="absolute inset-0 z-[2] hidden">
              <CanvasNoise className="h-full rounded-md" />
            </div>
            <Image
              src={keyEngage.src}
              alt={keyEngage.caption}
              width={keyEngage.width}
              height={keyEngage.height}
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
