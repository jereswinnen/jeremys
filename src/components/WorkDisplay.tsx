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
    <div className={`bg-emerald-10 ${className || ""}`}>
      <div
        ref={ref}
        {...events}
        className="flex gap-4 no-scrollbar overflow-x-scroll cursor-grab active:cursor-grabbing"
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
                className="pointer-events-none max-h-[60vh] object-contain select-none"
              />
            </picture>
          );
        })}
      </div>
    </div>
  );
}
