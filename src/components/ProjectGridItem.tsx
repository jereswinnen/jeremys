import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
  const project = projects.find((p) => p.name === projectName);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "inset(0% 0% 0% 100%)", // Start with the image fully hidden (clipped from the right)
        },
        {
          clipPath: "inset(0% 0% 0% 0%)", // Animate to fully reveal the image (no clipping)
          duration: 1.25, // Duration of the animation
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%", // Trigger when the top of the image hits 70% from the top of the viewport
            //end: "bottom top", // End when the bottom of the image exits the top of viewport
            toggleActions: "play none none none", // Play animation once when triggered
          },
        },
      );
    }
  }, []);

  if (!project) return <div>Project not found</div>;
  const image = project.images[imageIndex];
  if (!image) return <div>Image not found</div>;

  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <figure className="relative">
        <div ref={imageRef} className="relative overflow-hidden">
          <Image
            src={image.src}
            alt={`Project image`}
            width={1000}
            height={600}
          />
        </div>
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
