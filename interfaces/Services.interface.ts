interface Detail {
  title: string;
  detail: string;
}

export interface Service {
  projectImage: string,
  projectType: string;
  projectTitle: string;
  projectDescription: string;
  projectSubTitle: string;
  details: Detail[];
}