// Define the structure for project images
type ProjectImage = {
  src: string;
  caption: string;
  width: number;  // Original width of the image
  height: number; // Original height of the image
};

// Define the structure for a project
type Project = {
  name: string;
  description: string;
  link: string;
  keyImage: ProjectImage;
  images: ProjectImage[];
};

// Array of projects
export const projects: Project[] = [
  {
    name: 'Yally',
    description: 'UX/UI design, Frontend development',
    link: 'https://porsche.com',
    keyImage: { src: '/images/work/yally/master.webp', caption: 'Yally', width: 1560, height: 1080 },
    images: [
        { src: '/images/work/yally/image1.jpg', caption: 'Caption of image 1', width: 2330 , height: 3496 },
        { src: '/images/work/yally/image2.jpg', caption: 'Caption of image 2', width: 2514, height:  1675 },
        { src: '/images/work/yally/image3.jpg', caption: 'Caption of image 3', width: 1835, height: 2447 },
        { src: '/images/work/yally/image4.jpg', caption: 'Caption of image 4', width: 2512, height:  1675 },
        { src: '/images/work/yally/image5.jpg', caption: 'Caption of image 5', width: 6000, height:  6000 },
    ],
  },
  {
    name: 'Helpper',
    description: 'UX/UI design, Web design, Frontend development, Product ownership',
    link: 'https://audi.com',
    keyImage: { src: '/images/work/yally/master.webp', caption: 'Helpper', width: 1560, height: 1080 },
    images: [
        { src: '/images/work/helpper/image1.jpg', caption: 'Caption of image 1', width: 2359, height: 3539 },
        { src: '/images/work/helpper/image2.jpg', caption: 'Caption of image 2', width: 2447, height: 1376 },
    ],
  },
];