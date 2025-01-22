import type { ImageMetadata } from "astro";

export function formatProjectSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "");
}

export async function getProjectImage(projectName: string, imageName: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/projects/**/*.{png,jpg,jpeg,webp,avif}"
  );
  const imagePath = `/src/assets/projects/${formatProjectSlug(
    projectName
  )}/${imageName}`;

  if (!(imagePath in images)) {
    throw new Error(`Image ${imagePath} not found`);
  }

  const image = await images[imagePath]();
  return image.default;
}
