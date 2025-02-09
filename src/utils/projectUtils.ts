import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";

const projectsOrder = [
  "gamepal",
  "helpper",
  "scorecard",
  "realo",
  "shelf",
  "immo brown",
  "diabetik",
];

export function sortProjects(projects: CollectionEntry<"work">[]) {
  return projects.sort((a, b) => {
    const orderA = projectsOrder.indexOf(a.data.name.toLowerCase());
    const orderB = projectsOrder.indexOf(b.data.name.toLowerCase());
    return orderA - orderB;
  });
}

export function formatProjectSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export async function getProjectImage(projectName: string, imageName: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}",
  );
  const imagePath = `/src/assets/projects/${formatProjectSlug(
    projectName,
  )}/${imageName}`;

  if (!(imagePath in images)) {
    throw new Error(`Image ${imagePath} not found`);
  }

  const image = await images[imagePath]();
  return image.default;
}
