export interface ImageLayout {
  index: number;
  span?: number;
  spanSm?: number;
  spanMd?: number;
  spanLg?: number;
  spanXl?: number;
  start?: number;
  startSm?: number;
  startMd?: number;
  startLg?: number;
  startXl?: number;
}

export interface Role {
  tag: string;
}

export interface Artwork {
  src: string;
  caption?: string;
}
