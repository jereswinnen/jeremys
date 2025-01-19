import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { CollectionEntry } from "astro:content";
import { getProjectImagePath, formatProjectSlug } from "../utils/projectUtils";

interface WorkListProps {
  work: CollectionEntry<"work">[];
  className?: string;
}

const WorkList: React.FC<WorkListProps> = ({ work, className = "" }) => {
  const projectRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    projectRefs.current.forEach((projectRef) => {
      if (!projectRef) return;

      // Create hover animation for each project
      const image = projectRef.querySelector("img");
      const content = projectRef.querySelector(".project-content");

      const timeline = gsap.timeline({ paused: true });
      timeline
        .to(projectRef, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          image,
          {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          content,
          {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        );

      projectRef.addEventListener("mouseenter", () => timeline.play());
      projectRef.addEventListener("mouseleave", () => timeline.reverse());
    });
  }, [work]);

  return (
    <ul className={`${className}`.trim()}>
      {work.map((work, index) => {
        const projectSlug = formatProjectSlug(work.data.name);
        const firstArtwork = work.data.artwork?.[0];
        const basePath = getProjectImagePath(
          work.data.name,
          firstArtwork?.src || ""
        ).replace(/\.[^/.]+$/, "");

        return (
          <a
            key={projectSlug}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            href={`/work/${projectSlug}`}
            className="block bg-white shadow-md rounded-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <picture>
                <source srcSet={`${basePath}.avif`} type="image/avif" />
                <source srcSet={`${basePath}.webp`} type="image/webp" />
                <img
                  src={`${basePath}.png`}
                  alt={firstArtwork?.caption || `Image from ${work.data.name}`}
                  className="w-full h-48 object-cover transform-gpu"
                />
              </picture>
            </div>
            <div className="p-4 project-content transform-gpu">
              <h3 className="text-xl font-semibold">{work.data.name}</h3>
              <p className="text-gray-600">{work.data.role}</p>
              <div className="flex items-center gap-1">
                <span className="text-gray-600">{work.data.startDate}</span>
                <span>&#8594;</span>
                <span className="text-gray-600">{work.data.endDate}</span>
              </div>
            </div>
          </a>
        );
      })}
    </ul>
  );
};

export default WorkList;
