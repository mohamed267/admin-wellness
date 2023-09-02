import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { EventListEntity, EventResponse } from '../types';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
import { useQuery } from '@tanstack/react-query';
import { extractEvents } from '../utils/extactData';
import { GetEventQueryParam } from '../queryParams/get-event.queryParam';

type EventResponseProps = { meta: Meta; events: EventResponse[] };
type EventProps = { meta: Meta; events: EventListEntity[] };

export const getEvents = async (
  query: GetEventQueryParam = {},
): Promise<EventProps> => {
  const eventsResponse = (await axios.get('/api/events/admin', {
    params: query,
  })) as EventResponseProps;
  const events = extractEvents(eventsResponse?.events as EventResponse[]);

  return { meta: eventsResponse?.meta, events };
};

type QueryFnType = typeof getEvents;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  query?: GetEventQueryParam;
};

export const useEvents = ({ config, query }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['events'],
    queryFn: () => getEvents(query),
    ...config,
  });
};
