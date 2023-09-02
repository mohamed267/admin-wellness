import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { useQuery } from '@tanstack/react-query';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
import {
  GuideCategoryEntity,
  GuideCategoryEntityResponse,
} from 'features/guide/types';
import { GetGuideCategoryQueryParam } from 'features/guide/queryParams/guideCategory';
import { extractGuideCategories } from 'features/guide/utils/extactData';

type CategoryResponseEntity = {
  meta: Meta;
  items: GuideCategoryEntityResponse[];
};

type CategoryEntity = {
  meta: Meta;
  categories: GuideCategoryEntity[];
};

export const getGuideCategories = async (
  query: GetGuideCategoryQueryParam = {},
): Promise<CategoryEntity> => {
  const categories = (await axios.get('/api/guides/guide-categories', {
    params: {
      ...query,
    },
  })) as CategoryResponseEntity;

  return {
    categories: extractGuideCategories(categories?.items) ?? [],
    meta: categories.meta,
  };
};

type QueryFnType = typeof getGuideCategories;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  query?: GetGuideCategoryQueryParam;
};

export const useGuideCategories = ({ config, query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['/guideCategories'],
    queryFn: () => getGuideCategories(query),
    ...config,
  });
};
