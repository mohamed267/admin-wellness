import { Media } from 'features/global';
import { SocialMediaUrl } from '.';

export type BlogListEntity = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  consultData: {
    id: string;
  };
};

export type BlogListEntityResponse = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
};

export type BlogDetailsResponse = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  medias: Media[];
  latitude: number;
  longtitude: number;
  description: string;
  socialMediaUrls: SocialMediaUrl[];
  email: string;
  phoneNumber: string;
  website: string;
};

export type BlogDetails = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  medias: Media[];
  latitude: number;
  longtitude: number;
  description: string;
  socialMediaUrls: SocialMediaUrl[];
  email: string;
  phoneNumber: string;
  website: string;
};
