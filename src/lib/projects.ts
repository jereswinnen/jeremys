// Define the structure for project images
export type ProjectImage = {
  src: string;
  caption: string;
  width: number;  // Original width of the image
  height: number; // Original height of the image
};

// Define the structure for a project
export type Project = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  link: string;
  keyArtwork: ProjectImage;
  keyImage: ProjectImage;
  keyEngage: ProjectImage;
  images: ProjectImage[];
};

// Array of projects
export const projects: Project[] = [
  {
    name: 'Yally',
    description: 'UX/UI design, Frontend development',
    startDate: '09/2019',
    endDate: 'Current',
    link: 'https://porsche.com',
    keyArtwork: { src: '/images/work/yally/keyArtwork.webp', caption: 'Yally', width: 1560, height: 1080 },
    keyImage: { src: '/images/work/yally/keyImage.webp', caption: 'Yally', width: 3217 , height:  2285 },
    keyEngage: { src: '/images/work/helpper/keyEngage.webp', caption: 'Yally', width: 2800, height: 800 },
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
    startDate: '09/2019',
    endDate: '12/2022',
    link: 'https://audi.com',
    keyArtwork: { src: '/images/work/helpper/keyArtwork.webp', caption: 'Helpper', width: 1560, height: 1080 },
    keyImage: { src: '/images/work/helpper/keyImage.webp', caption: 'Helpper', width: 5000, height: 3333 },
    keyEngage: { src: '/images/work/helpper/keyEngage.webp', caption: 'Helpper', width: 2800, height: 800 },
    images: [
        { src: '/images/work/helpper/image1.jpg', caption: 'Caption of image 1', width: 2359, height: 3539 },
        { src: '/images/work/helpper/image2.jpg', caption: 'Caption of image 2', width: 2447, height: 1376 },
        { src: '/images/work/helpper/desktop-dashboard.webp', caption: 'Caption of image 3', width: 2800, height: 2574 },
        { src: '/images/work/helpper/engage.webp', caption: 'Caption of image 4', width: 2800, height: 800 },
    ],
  },
];