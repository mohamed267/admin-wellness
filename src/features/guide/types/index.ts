export * from './category';
export * from './guide';

export interface GuideCategory {
  id: string;
  name: string;
  imageUrl: string;
  isNew: boolean;
}

export interface GuideTown {
  id: string;
  name: string;
}

export interface SocialMediaUrl {
  id: string;
  url: string;
  name: string;
  isNew: boolean;
}
