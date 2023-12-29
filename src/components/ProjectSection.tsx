import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsScrollerItem from "./ProjectsScrollerItem";
import ProjectHeroTitle from "./ProjectHeroTitle";

interface ProjectSectionProps {
  projectName: string;
  projectImages: number[];
  className?: string;
}

const ProjectSection = ({
  projectName,
  projectImages,
  className,
}: ProjectSectionProps) => {
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  const classNames = `layoutBleed relative flex items-center gap-4 overflow-x-hidden bg-slate-100 pl-[var(--layoutPadding)] ${
    className || ""
  }`;

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
      ease: "none", // none to account for Lenis, power1.in for extra easing on top of Lenis
    });
  }, []);

  return (
    <section ref={sectionRef} className={classNames}>
      <ProjectHeroTitle projectName={projectName} className="shrink-0" />
      <div ref={scrollerRef} className="flex gap-4">
        {projectImages.map((index) => (
          <ProjectsScrollerItem
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
