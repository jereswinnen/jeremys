import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { CollectionEntry } from "astro:content";
import { getProjectImagePath, formatProjectSlug } from "../utils/projectUtils";

interface WorkListProps {
  work: CollectionEntry<"work">[];
  className?: string;
}

const WorkList: React.FC<WorkListProps> = ({ work, className = "" }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const projectRefs = useRef<Array<HTMLLIElement | null>>([]);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const projects = projectRefs.current;
    const images = imageRefs.current;
    if (!projects.length || !images.length) return;

    // Initialize all images as hidden
    gsap.set(images, {
      clipPath: "inset(100% 0 0 0)",
    });

    projects.forEach((project, index) => {
      if (!project || !images[index]) return;

      const otherProjects = projects.filter((_, i) => i !== index);

      project.addEventListener("mouseenter", () => {
        // Show current image
        gsap.to(images[index], {
          clipPath: "inset(0% 0 0 0)",
          duration: 0.5,
          ease: "power3.inOut",
        });

        // Fade out other projects
        gsap.to(otherProjects, {
          opacity: 0.3,
          duration: 0.3,
        });
      });

      project.addEventListener("mouseleave", () => {
        // Hide current image
        gsap.to(images[index], {
          clipPath: "inset(100% 0 0 0)",
          duration: 0.5,
          ease: "power3.inOut",
        });

        // Restore other projects
        gsap.to(otherProjects, {
          opacity: 1,
          duration: 0.3,
        });
      });
    });
  }, [work]);

  return (
    <ul ref={listRef} className={`${className} flex flex-col gap-8`.trim()}>
      {work.map((work, index) => {
        const projectSlug = formatProjectSlug(work.data.name);
        const basePath = getProjectImagePath(
          work.data.name,
          "HeroImage"
        ).replace(/\.[^/.]+$/, "");

        return (
          <li
            key={projectSlug}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="relative block"
          >
            <div
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="absolute top-1/2 -translate-y-1/2 right-0 w-[20vw] overflow-hidden [clip-path:inset(100%_0_0_0)]"
            >
              <picture>
                <source srcSet={`${basePath}.avif`} type="image/avif" />
                <source srcSet={`${basePath}.webp`} type="image/webp" />
                <img
                  src={`${basePath}.png`}
                  alt={`Hero image for ${work.data.name}`}
                  className="w-full"
                />
              </picture>
            </div>
            <div className="relative z-10 flex flex-col gap-1 cursor-default">
              <h3 className="text-4xl font-bold">{work.data.name}</h3>
              <p className="text-gray-600">{work.data.role}</p>
              <div className="flex items-center gap-1">
                <span className="text-gray-600">{work.data.startDate}</span>
                <span>&#8594;</span>
                <span className="text-gray-600">{work.data.endDate}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default WorkList;
