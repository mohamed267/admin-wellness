import { Media } from 'features/global';
import {
  GuideCategoryEntity,
  GuideCategoryEntityResponse,
  GuideDetails,
  GuideDetailsResponse,
  GuideListEntity,
  GuideListEntityResponse,
} from '../types';
import { joinGuideImage, joinguideCategoryImage } from 'utils/images';

export const extractGuides = (
  guidesResponse: GuideListEntityResponse[],
): GuideListEntity[] => {
  return (
    guidesResponse?.map((guide: GuideListEntityResponse) => ({
      id: guide?.id,
      title: guide?.title ?? '',
      category: guide.category,
      createdAt: guide.createdAt,
      viewsNumber: guide.viewsNumber,
      numReviews: guide.numReviews,
      avgRating: guide.avgRating,
      town: guide.town,
      consultData: {
        id: guide?.id,
      },
    })) ?? []
  );
};

export const extractGuide = (guide: GuideDetailsResponse): GuideDetails => {
  return {
    id: guide?.id,
    title: guide?.title ?? '',
    category: guide.category,
    createdAt: guide.createdAt,
    viewsNumber: guide.viewsNumber,
    numReviews: guide.numReviews,
    avgRating: guide.avgRating,
    town: guide.town,
    medias:
      guide?.medias?.map((media: Media) => {
        return {
          id: media.id,
          type: media.type,
          isNew: false,
          url: joinGuideImage(media.url),
        };
      }) ?? [],
    latitude: guide?.latitude,
    longtitude: guide?.longtitude,
    description: guide?.description,
    email: guide.email,
    phoneNumber: guide.phoneNumber,
    website: guide.website,
    socialMediaUrls: guide?.socialMediaUrls ?? [],
  };
};

export const extractGuideCategories = (
  categories: GuideCategoryEntityResponse[],
): GuideCategoryEntity[] => {
  console.log('our categories => ', categories);
  return (
    categories?.map((category: GuideCategoryEntityResponse) => ({
      id: `${category?.id}`,
      name: category?.name,
      imageUrl: joinguideCategoryImage(category?.imageUrl),
      consultData: {
        id: `${category?.id}`,
      },
    })) ?? []
  );
};
