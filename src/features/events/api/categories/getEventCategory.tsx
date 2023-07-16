import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { axios } from 'lib/axios';
import { EventCategory } from 'features/global';
import { useQuery } from '@tanstack/react-query';
import { GetEvenCategoryQueryParam } from 'features/events/queryParams/category';

type EventCategoryProps = EventCategory;

export const getEventCategory = async (
  categoryId?: string,
): Promise<EventCategoryProps | null> => {
  let eventCategoryResponse = null;
  if (categoryId) {
    eventCategoryResponse = (await axios.get(
      `/api/events/categories/${categoryId}`,
    )) as EventCategoryProps;
  }

  return eventCategoryResponse;
};

type QueryFnType = typeof getEventCategory;

export type useEventCategoryQueryOptions = {
  config?: QueryConfig<QueryFnType>;
  query: GetEvenCategoryQueryParam;
};

export const useEventCategory = ({
  config,
  query,
}: useEventCategoryQueryOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`eventCatrgories/${query?.categoryId}`],
    //TODO:add  query handling
    queryFn: () => getEventCategory(query?.categoryId),
    ...config,
  });
};
