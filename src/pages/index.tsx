import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import ProjectNavigation from "@/components/ProjectNavigation";
import DebugDummyText from "@/components/DebugDummyText";
import CanvasNoise from "@/components/CanvasNoise";

const HomePage = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const portfolioSectionRef = useRef(null);

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
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
      ScrollTrigger.refresh();
    }
  }, [portfolioSectionRef]);

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
        <ProjectNavigation activeProject={activeProject} />
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
      <section className="h-80 w-1/2 bg-blue-300">
        <CanvasNoise className="h-full " />
      </section>
      <DebugDummyText />
    </>
  );
};

export default HomePage;
