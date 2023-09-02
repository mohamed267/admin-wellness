import {
  CHAT_URL,
  EVENT_URL,
  PROFILE_PICTURE_URL,
  STORE_URL,
  GUIDE_URL,
  GUIDE_CATEGORY_URL,
} from 'consts/imageFolders';

export const joinProfileImage = (
  imageUrl: string | null | undefined,
): string => {
  return imageUrl ? `${PROFILE_PICTURE_URL}${imageUrl}` : '';
};

export const joinEventImage = (imageUrl: string | null | undefined): string => {
  return imageUrl ? `${EVENT_URL}${imageUrl}` : '';
};

export const joinStoreImage = (imageUrl: string | null | undefined): string => {
  return imageUrl ? `${STORE_URL}${imageUrl}` : '';
};

export const joinChatImage = (imageUrl: string | null | undefined): string => {
  return imageUrl ? `${CHAT_URL}${imageUrl}` : '';
};

export const joinGuideImage = (imageUrl: string | null | undefined): string => {
  return imageUrl ? `${GUIDE_URL}${imageUrl}` : '';
};

export const joinguideCategoryImage = (
  imageUrl: string | null | undefined,
): string => {
  return imageUrl ? `${GUIDE_CATEGORY_URL}${imageUrl}` : '';
};
