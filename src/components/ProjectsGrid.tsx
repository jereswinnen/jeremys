import React from "react";
import Image from "next/image";
import { projects } from "../lib/projects";

const ProjectsGrid: React.FC = () => {
  // Function to shuffle images
  const shuffleImages = (images: any[]) => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  };

  // Create a flattened array of all images, randomly shuffled
  const allImages = shuffleImages(
    projects.flatMap((project) => project.images),
  );

  return (
    <>
      {/* Adjust grid styling as needed */}
      {allImages.map((image, index) => (
        <figure key={index} className="project-image">
          <Image src={image.src} alt={`Project image`} fill={true} />
          <figcaption>
            <p>{image.caption}</p>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default ProjectsGrid;
