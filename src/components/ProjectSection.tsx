import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsScrubberItem from "./ProjectsScrollerItem";
import ProjectHeroTitle from "./ProjectHeroTitle";

interface ProjectSectionProps {
  projectName: string;
  projectImages: number[];
}

const ProjectSection = ({
  projectName,
  projectImages,
}: ProjectSectionProps) => {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projectScroller = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom top",
        scrub: true,
      },
    });

    projectScroller.to(scrollerRef.current, {
      xPercent: -30,
      ease: "power1.in",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="layoutBleed relative flex items-center gap-4 overflow-x-hidden bg-slate-100 pl-[var(--layoutPadding)]"
    >
      <ProjectHeroTitle projectName={projectName} className="shrink-0" />
      <div ref={scrollerRef} className="flex gap-4">
        {projectImages.map((index) => (
          <ProjectsScrubberItem
            projectName={projectName}
            imageIndex={index}
            className="col-span-5"
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
