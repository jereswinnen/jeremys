import React, { forwardRef, MouseEvent } from "react";
import { projects } from "../lib/projects";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface ProjectNavigationProps {
  activeProject: string | null;
  navRef: React.RefObject<HTMLDivElement>;
}

const ProjectNavigation = forwardRef<HTMLDivElement, ProjectNavigationProps>(
  ({ activeProject, navRef }, ref) => {
    const scrollToSection = (
      event: MouseEvent<HTMLAnchorElement>,
      projectName: string,
    ) => {
      event.preventDefault();
      const sectionId = projectName.replace(/\s+/g, "-");
      const section = document.getElementById(sectionId);

      if (section) {
        gsap.to(window, {
          scrollTo: { y: section, autoKill: true },
          duration: 0.38,
          ease: "circ.inOut",
        });
      }
    };

    return (
      <section
        ref={ref}
        className="absolute -right-[var(--layoutPadding)] top-0 h-full w-[180px] opacity-0"
      >
        <nav
          ref={navRef}
          className="projectsSideNav sticky top-0 z-20 flex h-screen w-full items-center justify-end"
        >
          <ul className="flex flex-col items-end gap-2">
            {projects.map((project) => (
              <li key={project.name} className="group flex items-center gap-2">
                <a
                  href={`#${project.name.replace(/\s+/g, "-")}`}
                  onClick={(e) => scrollToSection(e, project.name)}
                  className={`flex items-center gap-1 text-base ${
                    activeProject === project.name
                      ? "text-neutral-900 font-medium"
                      : "text-neutral-900/50"
                  }`}
                >
                  {project.name}
                </a>
                <span
                  className={`ease-in-out-circ block h-[1px] w-3 transition-all duration-[200ms] group-hover:w-5 ${
                    activeProject === project.name
                      ? "w-5 bg-neutral-900"
                      : "bg-neutral-900/50"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    );
  },
);
export default ProjectNavigation;
