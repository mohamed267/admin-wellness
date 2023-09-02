import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { GuideDetails, GuideDetailsResponse } from '../types';
import { axios } from 'lib/axios';
import { useQuery } from '@tanstack/react-query';
import { extractGuide } from '../utils/extactData';

export const getGuide = async (
  guideId?: string,
): Promise<GuideDetails | null> => {
  if (guideId) {
    console.log('our guide id=>  ', guideId);
    const guideResponse = (await axios.get(
      `/api/guides/${guideId}`,
    )) as GuideDetailsResponse;

    console.log('our guide response =>  ', guideResponse);

    return extractGuide(guideResponse);
  }
  return null;
};

type QueryFnType = typeof getGuide;

export type UseUsersOptions = {
  config?: QueryConfig<QueryFnType>;
  guideId?: string;
};

export const useGuide = ({ config, guideId }: UseUsersOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: [`guide/${guideId}`],
    queryFn: () => getGuide(guideId),
    ...config,
  });
};
