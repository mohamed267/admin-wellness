import { BlogListEntity, BlogListEntityResponse } from '../types';
// import { joinBlogImage, joinblogCategoryImage } from 'utils/images';

export const extractBlogs = (
  blogsResponse: BlogListEntityResponse[],
): BlogListEntity[] => {
  return (
    blogsResponse?.map((blog: BlogListEntityResponse) => ({
      id: blog?.id,
      title: blog?.title ?? '',
      createdAt: blog.createdAt,
      viewsNumber: blog.viewsNumber,
      numReviews: blog.numReviews,
      avgRating: blog.avgRating,
      consultData: {
        id: blog?.id,
      },
    })) ?? []
  );
};

// export const extractBlog = (blog: BlogDetailsResponse): BlogDetails => {
//   return {
//     id: blog?.id,
//     title: blog?.title ?? '',
//     category: blog.category,
//     createdAt: blog.createdAt,
//     viewsNumber: blog.viewsNumber,
//     numReviews: blog.numReviews,
//     avgRating: blog.avgRating,
//     town: blog.town,
//     medias:
//       blog?.medias?.map((media: Media) => {
//         return {
//           id: media.id,
//           type: media.type,
//           isNew: false,
//           url: joinBlogImage(media.url),
//         };
//       }) ?? [],
//     latitude: blog?.latitude,
//     longtitude: blog?.longtitude,
//     description: blog?.description,
//     email: blog.email,
//     phoneNumber: blog.phoneNumber,
//     website: blog.website,
//     socialMediaUrls: blog?.socialMediaUrls ?? [],
//   };
// };
