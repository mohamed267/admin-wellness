import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { EventDetails } from '../types';
import { axios } from 'lib/axios';
import { useQuery } from '@tanstack/react-query';
import { extractEvent } from '../utils/extactData';

export const getEvent = async (
  eventId?: string,
): Promise<EventDetails | null> => {
  return eventId
    ? extractEvent(await axios.get(`/api/events/${eventId}`))
    : null;
};

type QueryFnType = typeof getEvent;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  eventId?: string;
};

export const useEvent = ({ config, eventId }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`events/${eventId}`],
    queryFn: () => getEvent(eventId),
    ...config,
  });
};
