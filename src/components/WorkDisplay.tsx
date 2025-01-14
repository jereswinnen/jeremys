import { useRef, type RefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import type { CollectionEntry } from "astro:content";
import { getProjectImagePath, formatProjectSlug } from "../utils/projectUtils";

interface WorkDisplayProps {
  work: CollectionEntry<"work">[];
  className?: string;
}

export default function WorkDisplay({ work, className }: WorkDisplayProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { events } = useDraggable(ref as RefObject<HTMLDivElement>, {
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

  const allImages = sortedWork.flatMap((project) =>
    project.data.artwork.map((art: any) => ({
      ...art,
      projectName: project.data.name,
      projectUrl: `/work/${formatProjectSlug(project.data.name)}`,
    }))
  );

  return (
    <div className={`${className || ""}`}>
      <div
        ref={ref}
        {...events}
        className="flex gap-2 py-4 no-scrollbar overflow-x-scroll cursor-grab active:cursor-grabbing"
      >
        {allImages.map((image, index) => {
          const basePath = getProjectImagePath(
            image.projectName,
            image.src
          ).replace(/\.[^/.]+$/, "");
          return (
            <div className="group flex-none">
              <span className="block transition-all duration-500 ease-in-circ opacity-0 translate-y-2 blur-sm group-hover:opacity-100 group-hover:-translate-y-2 group-hover:blur-none">
                {image.projectName}
              </span>
              <picture key={index} className="flex-non">
                <source srcSet={`${basePath}.avif`} type="image/avif" />
                <source srcSet={`${basePath}.webp`} type="image/webp" />
                <img
                  src={`${basePath}.png`}
                  alt={image.caption || `Image from ${image.projectName}`}
                  loading="lazy"
                  className="pointer-events-none max-h-[60vh] object-contain select-none bg-zinc-100 dark:bg-zinc-900 p-6"
                />
              </picture>
            </div>
          );
        })}
      </div>
    </div>
  );
}
