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
    const orderA = [
      "gamepal",
      "helpper",
      "scorecard",
      "realo",
      "shelf",
      "immo brown",
      "diabetik",
    ].indexOf(a.data.name.toLowerCase());
    const orderB = [
      "gamepal",
      "helpper",
      "scorecard",
      "realo",
      "shelf",
      "immo brown",
      "diabetik",
    ].indexOf(b.data.name.toLowerCase());
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
    <div className={`bg-emerald-100 ${className || ""}`}>
      <div className="pointer-events-none absolute flex items-end h-full">
        <span className="font-bold text-[130px] text-white mix-blend-difference">
          Work
        </span>
      </div>
      <div
        ref={ref}
        {...events}
        className="flex gap-4 no-scrollbar overflow-x-scroll cursor-grab active:cursor-grabbing"
      >
        {allImages.map((image, index) => (
          <img
            key={index}
            src={getProjectImagePath(image.projectName, image.src)}
            alt={image.caption || `Image from ${image.projectName}`}
            loading="lazy"
            className="pointer-events-none flex-none max-h-[60vh] object-contain select-none"
          />
        ))}
      </div>
    </div>
  );
}
