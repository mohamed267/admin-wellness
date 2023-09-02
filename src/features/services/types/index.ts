export * from './blog';

export interface BlogCategory {
  id: string;
  name: string;
  imageUrl: string;
  isNew: boolean;
}

export interface BlogTown {
  id: string;
  name: string;
}

export interface SocialMediaUrl {
  id: string;
  url: string;
  name: string;
  isNew: boolean;
}
