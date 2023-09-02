import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { axios } from 'lib/axios';
import { useQuery } from '@tanstack/react-query';
import { GuideCategory } from 'features/guide/types';
import { joinguideCategoryImage } from 'utils/images';

export const getGuideCategory = async (
  categoryId?: string,
): Promise<Partial<GuideCategory> | null> => {
  let guideCategoryResponse = null;
  if (categoryId) {
    guideCategoryResponse = (await axios.get(
      `/api/guides/guide-categories/${categoryId}`,
    )) as GuideCategory;
  }

  return {
    ...guideCategoryResponse,
    imageUrl: joinguideCategoryImage(guideCategoryResponse?.imageUrl),
  };
};

type QueryFnType = typeof getGuideCategory;

export type useGuideCategoryQueryOptions = {
  config?: QueryConfig<QueryFnType>;
  guideCategoryId?: string;
};

export const useGuideCategory = ({
  config,
  guideCategoryId,
}: useGuideCategoryQueryOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`guideCatrgories/${guideCategoryId}`],
    //TODO:add  query handling
    queryFn: () => getGuideCategory(guideCategoryId),
    ...config,
  });
};
