import { Media } from 'features/global';
import { GuideTown, SocialMediaUrl } from '.';
import { GuideCategory } from './category';

export type GuideListEntity = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  category: GuideCategory;
  town: GuideTown;
  consultData: {
    id: string;
  };
};

export type GuideListEntityResponse = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  category: GuideCategory;
  town: GuideTown;
};

export type GuideDetailsResponse = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  category: GuideCategory;
  town: GuideTown;
  medias: Media[];
  latitude: number;
  longtitude: number;
  description: string;
  socialMediaUrls: SocialMediaUrl[];
  email: string;
  phoneNumber: string;
  website: string;
};

export type GuideDetails = {
  id: string;
  title: string;
  createdAt: any;
  viewsNumber: number;
  numReviews: number;
  avgRating: number;
  category: GuideCategory;
  town: GuideTown;
  medias: Media[];
  latitude: number;
  longtitude: number;
  description: string;
  socialMediaUrls: SocialMediaUrl[];
  email: string;
  phoneNumber: string;
  website: string;
};
