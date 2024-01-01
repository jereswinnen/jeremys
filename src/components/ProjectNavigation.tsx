import React, { forwardRef, useRef } from "react";
import { projects } from "../lib/projects";

interface ProjectNavigationProps {
  activeProject: string | null;
  navRef: React.RefObject<HTMLDivElement>;
}

const ProjectNavigation = forwardRef<HTMLDivElement, ProjectNavigationProps>(
  ({ activeProject, navRef }, ref) => {
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
