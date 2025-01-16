import React, { useRef, useEffect, useState, type RefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import type { CollectionEntry } from "astro:content";
import { getProjectImagePath, formatProjectSlug } from "../utils/projectUtils";

interface WorkDisplayProps {
  work: CollectionEntry<"work">[];
  className?: string;
}

export default function WorkDisplay({ work, className }: WorkDisplayProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const { events } = useDraggable(scrollerRef as RefObject<HTMLDivElement>, {
    applyRubberBandEffect: true,
    decayRate: 0.95,
  });

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

  // State to track the currently visible project
  const [currentProject, setCurrentProject] = useState<string>(
    allProjects[0]?.data.name || ""
  );

  // Refs for the first image of each project
  const projectFirstImageRefs = useRef<Record<string, HTMLImageElement | null>>(
    {}
  );

  useEffect(() => {
    const options = {
      root: scrollerRef.current,
      rootMargin: "0px",
      threshold: 0.5, // 50% of the first image should be visible to trigger
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectName = entry.target.getAttribute("data-project-name");
          if (projectName) {
            setCurrentProject(projectName);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe the first image of each project
    allProjects.forEach((project) => {
      const firstImage = projectFirstImageRefs.current[project.data.name];
      if (firstImage) {
        observer.observe(firstImage);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [allProjects]);

  // Function to handle clicking on a project name
  const handleProjectClick = (projectName: string) => {
    const firstImage = projectFirstImageRefs.current[projectName];
    if (firstImage && scrollerRef.current) {
      // Calculate the scroll position of the first image relative to the scroller
      const scrollerRect = scrollerRef.current.getBoundingClientRect();
      const imageRect = firstImage.getBoundingClientRect();
      const scrollLeft =
        scrollerRef.current.scrollLeft + (imageRect.left - scrollerRect.left);

      scrollerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  // Function to assign refs to the first image of each project
  const assignFirstImageRef =
    (projectName: string) => (el: HTMLImageElement | null) => {
      if (el) {
        projectFirstImageRefs.current[projectName] = el;
      }
    };

  // Group images by project for easier handling
  const allImages = sortedWork.flatMap((project) =>
    project.data.artwork.map((art: any, index: number) => ({
      ...art,
      projectName: project.data.name,
      projectUrl: `/work/${formatProjectSlug(project.data.name)}`,
      isFirstImage: index === 0, // Mark the first image of each project
    }))
  );

  return (
    <div className={`${className || ""}`}>
      {/* Project Names Array */}
      <div className="flex flex-wrap gap-4 md:gap-7 mb-4 overflow-x-auto no-scrollbar px-4">
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
                loading="lazy"
                className="pointer-events-none max-h-[60vh] object-contain select-none bg-zinc-100 dark:bg-zinc-900 p-7"
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
