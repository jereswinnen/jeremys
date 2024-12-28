import { getImage } from "astro:assets";

export function formatProjectSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export function getProjectImagePath(projectName: string, imageName: string) {
  return `/src/assets/projects/${formatProjectSlug(projectName)}/${imageName}`;
}
