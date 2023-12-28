import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type ProjectsScrollerProps = {
  children: React.ReactNode;
};

const ProjectsScroller: React.FC<ProjectsScrollerProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween>();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Exit the function if the user prefers reduced motion
      return;
    }

    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const viewportWidth = scrollContainerRef.current.offsetWidth;

      if (scrollWidth > viewportWidth) {
        const distanceToTravel = scrollWidth - viewportWidth;
        const speed = 60; // pixels per second
        const duration = distanceToTravel / speed;

        animationRef.current = gsap.to(scrollContainerRef.current, {
          x: -distanceToTravel,
          ease: "none",
          duration: duration,
          repeat: -1,
          paused: true,
        });
        animationRef.current.play();
      }
    }
  }, [children]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      // Slowing down on hover
      gsap.to(animationRef.current, {
        duration: 0.5,
        ease: "power1.out",
        timeScale: 0,
      });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        duration: 0.3,
        ease: "power1.in",
        timeScale: 1,
      });
    }
  };

  return (
    <section
      className="layoutBleed overflow-y-hidden bg-slate-100 pl-[var(--layoutPadding)] pt-[var(--layoutPadding)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-4" ref={scrollContainerRef}>
        {children}
      </div>
    </section>
  );
};

export default ProjectsScroller;
