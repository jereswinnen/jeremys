export type ProjectArtwork = {
  src: string;
  caption: string;
  colSpan?: number;
  mdColSpan?: number;
  lgColSpan?: number;
};

export type ProjectDetail = {
  title: string;
  content: string;
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  role: string;
  startDate: string;
  endDate: string;
  linkLabel: string;
  linkAction: string;
  artwork: ProjectArtwork[];
  details: ProjectDetail[];
};
