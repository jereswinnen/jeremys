import React from "react";
import { projects, Project } from "../lib/projects";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectHeroTitleProps = {
  projectName?: string;
  className?: string;
  text?: string;
};

const ProjectHeroTitle: React.FC<ProjectHeroTitleProps> = ({
  projectName,
  className,
  text,
}) => {
  const project = projects.find((p) => p.name === projectName) as Project;
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const classNames = `textMask overflow-hidden text-[240px] font-display text-transparent font-extrabold ${
    className || ""
  }`;

  const defaultBgImage = "/images/defaultMask.webp";
  const backgroundImageUrl = text ? defaultBgImage : project?.keyImage.src;

  return (
    <h1 className={classNames}>
      {text || project.name}
      <motion.div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-center mix-blend-overlay brightness-75 saturate-150"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          y: parallaxY,
        }}
      ></motion.div>
    </h1>
  );
};

export default ProjectHeroTitle;
