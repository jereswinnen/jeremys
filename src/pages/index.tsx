import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import DebugDummyText from "@/components/DebugDummyText";
import CanvasNoise from "@/components/CanvasNoise";
import EngageSection from "@/components/EngageSection";

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const portfolioSectionRef = useRef(null);
  const projectNavRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (portfolioSectionRef.current) {
      // scrollTriggers for each ProjectSection
      const projectNames = ["Helpper", "Yally"];
      projectNames.forEach((name) => {
        ScrollTrigger.create({
          trigger: `#${name}`,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => self.isActive && setActiveProject(name),
        });
      });
      // scrollTrigger for ProjectNavigation
      if (projectNavRef.current) {
        gsap.fromTo(
          projectNavRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "circ.inOut",
            scrollTrigger: {
              trigger: projectNavRef.current,
              start: "top 20%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { translateX: "100%" },
          {
            translateX: 0,
            ease: "circ.inOut",
            scrollTrigger: {
              trigger: projectNavRef.current,
              start: "top 20%",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ScrollTrigger.refresh();
      };
    }
  }, [portfolioSectionRef, projectNavRef, navRef]);

  return (
    <>
      <Head>
        <title>Testing</title>
        <meta name="description" content="Personal site" />
      </Head>
      <section className="layoutInner h-[80vh] gap-y-12">
        <Header />
        <section className="col-span-4 col-start-5 flex flex-col gap-10">
          <article className="text-3xl/10">
            <p>
              Blending a decade of UX/UI design experience with sharp
              problem-solving skills, I create mobile-first interfaces that
              captivate users, bringing them to life with modular, semantic
              code.
            </p>
            <p>Currently working as a creative developer at Yally.</p>
          </article>
        </section>
      </section>
      <section ref={portfolioSectionRef} className="relative">
        <ProjectNavigation
          ref={projectNavRef}
          navRef={navRef}
          activeProject={activeProject}
        />
        <ProjectSection
          projectName="Yally"
          projectImages={[1, 1, 1]}
          className="h-[80vh]"
        />
        <ProjectSection
          projectName="Helpper"
          projectImages={[2, 2, 2]}
          className="h-[80vh]"
        />
      </section>
      <section className="h-80">
        <CanvasNoise className="h-full" />
      </section>
      <DebugDummyText />
      <EngageSection projectName="Helpper" />
    </>
  );
};

export default HomePage;
