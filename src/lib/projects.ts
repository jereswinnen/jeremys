// Define the structure for project images
type ProjectImage = {
  src: string;
  caption: string;
};

// Define the structure for a project
type Project = {
  name: string;
  description: string;
  link: string;
  images: ProjectImage[];
};

// Array of projects
export const projects: Project[] = [
  {
    name: 'Yally',
    description: 'UX/UI design, Frontend development',
    link: 'https://porsche.com',
    images: [
        { src: '/images/work/yally/image1.jpg', caption: 'Caption of image 1' },
        { src: '/images/work/yally/image2.jpg', caption: 'Caption of image 2' },
        { src: '/images/work/yally/image3.jpg', caption: 'Caption of image 3' },
        { src: '/images/work/yally/image4.jpg', caption: 'Caption of image 4' },
    ],
  },
  {
    name: 'Helpper',
    description: 'UX/UI design, Web design, Frontend development, Product ownership',
    link: 'https://audi.com',
    images: [
        { src: '/images/work/helpper/image1.jpg', caption: 'Caption of image 1' },
        { src: '/images/work/helpper/image2.jpg', caption: 'Caption of image 2' },
    ],
  },
];