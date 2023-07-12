import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { Event, EventResponse } from '../types';
import { axios } from 'lib/axios';
import { Meta } from 'features/global';
import { useQuery } from '@tanstack/react-query';
import { extractEvents } from '../utils/extactData';

type EventResponseProps = { meta: Meta; events: EventResponse[] };
type EventProps = { meta: Meta; events: Event[] };

export const getEvents = async (): Promise<EventProps> => {
  const eventsResponse = (await axios.get(
    '/api/events/admin',
  )) as EventResponseProps;
  const events = extractEvents(eventsResponse?.events as EventResponse[]);

  return { meta: eventsResponse?.meta, events };
};

type QueryFnType = typeof getEvents;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useEvents = ({ config }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    ...config,
  });
};
