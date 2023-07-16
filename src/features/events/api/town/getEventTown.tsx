import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { axios } from 'lib/axios';
import { EventTown } from 'features/events';
import { useQuery } from '@tanstack/react-query';
import { GetEvenTownQueryParam } from 'features/events/queryParams/town/get-event-town.queryParams';

type EventTownProps = EventTown;

export const getEventTown = async (
  townId?: string,
): Promise<EventTownProps | null> => {
  let eventTownResponse = null;
  if (townId) {
    eventTownResponse = (await axios.get(
      `/api/events/towns/${townId}`,
    )) as EventTownProps;
  }

  return eventTownResponse;
};

type QueryFnType = typeof getEventTown;

export type useEventTownQueryOptions = {
  config?: QueryConfig<QueryFnType>;
  query: GetEvenTownQueryParam;
};

export const useEventTown = ({ config, query }: useEventTownQueryOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`eventTowns/${query?.townId}`],
    //TODO:add  query handling
    queryFn: () => getEventTown(query?.townId),
    ...config,
  });
};
