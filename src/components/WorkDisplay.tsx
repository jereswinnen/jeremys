import React, { useRef, useEffect, useState, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useDraggable } from "react-use-draggable-scroll";
import type { CollectionEntry } from "astro:content";
import { getProjectImagePath, formatProjectSlug } from "../utils/projectUtils";

gsap.registerPlugin(ScrollToPlugin);

interface WorkDisplayProps {
  work: CollectionEntry<"work">[];
  className?: string;
}

export default function WorkDisplay({
  work,
  className = "",
}: WorkDisplayProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { events } = useDraggable(scrollerRef as RefObject<HTMLDivElement>, {
    applyRubberBandEffect: true,
    decayRate: 0.96,
  });

  // Sort logic (unchanged)
  const sortedWork = [...work].sort((a, b) => {
    const order = [
      "gamepal",
      "helpper",
      "scorecard",
      "realo",
      "shelf",
      "immo brown",
      "diabetik",
    ];
    const orderA = order.indexOf(a.data.name.toLowerCase());
    const orderB = order.indexOf(b.data.name.toLowerCase());
    return orderA - orderB;
  });

  const allProjects = sortedWork;
  const [currentProject, setCurrentProject] = useState<string>(
    allProjects[0]?.data.name || ""
  );

  // Store refs to the first image of each project
  const projectFirstImageRefs = useRef<Record<string, HTMLImageElement | null>>(
    {}
  );

  // Intersection Observer to track the "most visible" project
  useEffect(() => {
    const options = {
      root: scrollerRef.current,
      // Multiple thresholds let us get an accurate intersectionRatio
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const callback: IntersectionObserverCallback = (entries) => {
      let bestCandidate = currentProject;
      let maxRatio = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const projectName = entry.target.getAttribute("data-project-name");
          if (projectName) bestCandidate = projectName;
        }
      });

      if (bestCandidate !== currentProject) {
        setCurrentProject(bestCandidate);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    allProjects.forEach((project) => {
      const firstImage = projectFirstImageRefs.current[project.data.name];
      if (firstImage) observer.observe(firstImage);
    });

    return () => {
      observer.disconnect();
    };
  }, [allProjects, currentProject]);

  // Click handler with GSAP for custom speed/easing
  const handleProjectClick = (projectName: string) => {
    const firstImage = projectFirstImageRefs.current[projectName];
    if (firstImage && scrollerRef.current) {
      const scrollerRect = scrollerRef.current.getBoundingClientRect();
      const imageRect = firstImage.getBoundingClientRect();
      const scrollLeft =
        scrollerRef.current.scrollLeft + (imageRect.left - scrollerRect.left);

      // GSAP for custom speed/ease
      gsap.to(scrollerRef.current, {
        scrollTo: { x: scrollLeft },
        duration: 0.8, // Adjust speed
        ease: "power2.inOut", // Adjust easing
      });
    }
  };

  // Assign refs to the first image of each project
  const assignFirstImageRef =
    (projectName: string) => (el: HTMLImageElement | null) => {
      if (el) {
        projectFirstImageRefs.current[projectName] = el;
      }
    };

  // Gather all images
  const allImages = sortedWork.flatMap((project) =>
    project.data.artwork.map((art: any, index: number) => ({
      ...art,
      projectName: project.data.name,
      projectUrl: `/work/${formatProjectSlug(project.data.name)}`,
      isFirstImage: index === 0,
    }))
  );

  return (
    <div className={`${className} flex flex-col gap-6`}>
      {/* Project Names */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-7 overflow-x-auto no-scrollbar px-4">
        {allProjects.map((project) => (
          <button
            key={project.data.name}
            onClick={() => handleProjectClick(project.data.name)}
            className={`whitespace-nowrap text-2xl ${
              currentProject === project.data.name
                ? "font-bold text-current"
                : "font-light opacity-50"
            } hover:opacity-100 transition-all duration-500 ease-in-circ tracking-tight`}
            aria-current={
              currentProject === project.data.name ? "page" : undefined
            }
            aria-label={`View project ${project.data.name}`}
          >
            {project.data.name}
          </button>
        ))}
      </div>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        {...events}
        className="flex gap-2 no-scrollbar overflow-x-scroll cursor-grab active:cursor-grabbing px-4"
      >
        {allImages.map((image, index) => {
          const basePath = getProjectImagePath(
            image.projectName,
            image.src
          ).replace(/\.[^/.]+$/, "");
          return (
            <picture key={index} className="flex-none">
              <source srcSet={`${basePath}.avif`} type="image/avif" />
              <source srcSet={`${basePath}.webp`} type="image/webp" />
              <img
                src={`${basePath}.png`}
                alt={image.caption || `Image from ${image.projectName}`}
                // loading="lazy"
                className="pointer-events-none max-h-[50vh] object-contain select-none bg-zinc-100 dark:bg-zinc-900 p-7"
                data-project-name={image.projectName}
                ref={
                  image.isFirstImage
                    ? assignFirstImageRef(image.projectName)
                    : undefined
                }
              />
            </picture>
          );
        })}
      </div>
    </div>
  );
}
