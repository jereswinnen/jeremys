import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";
import DebugDummyText from "@/components/DebugDummyText";

const HomePage = () => {
  const portfolioSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (portfolioSectionRef.current) {
      gsap.to(portfolioSectionRef.current, {
        yPercent: -10,
        ease: "none", // none to account for Lenis, power1.in for extra easing on top of Lenis
        scrollTrigger: {
          trigger: portfolioSectionRef.current,
          start: "top 80%", // Animation starts when the top of the section hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the section exits the top of the viewport
          scrub: true, // Smooth scrubbing effect
        },
      });
    }
  }, []);

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
      <section ref={portfolioSectionRef}>
        <ProjectSection
          projectName="Helpper"
          projectImages={[2, 2, 2]}
          className="h-[80vh]"
        />
      </section>
      <DebugDummyText />
    </>
  );
};

export default HomePage;
