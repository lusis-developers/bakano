interface Detail {
  title: string;
  detail: string;
};

interface SocialMedia {
  icon: string;
  link: string;
};

export interface Service {
  projectImage: string,
  projectType: string;
  videoDemo: string;
  projectTitle: string;
  projectDescription: string;
  projectSubTitle: string;
  details: Detail[];
  socialMedia: SocialMedia[]
}