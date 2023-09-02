// import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
// import { GuideListEntity, GuideListEntityResponse } from '../types';
// import { axios } from 'lib/axios';
// import { Meta } from 'features/global';
// import { useQuery } from '@tanstack/react-query';
// import { extractGuides } from '../utils/extactData';
// import { GetGuideQueryParam } from '../queryParams/get-guide.queryParam';

// type GuideResponseProps = { meta: Meta; guides: GuideListEntityResponse[] };
// type GuideProps = { meta: Meta; guides: GuideListEntity[] };

// export const getGuides = async (
//   query: GetGuideQueryParam = {},
// ): Promise<GuideProps> => {
//   const guidesResponse = (await axios.get('/api/guides', {
//     params: query,
//   })) as GuideResponseProps;
//   const guides = extractGuides(guidesResponse?.guides);

//   return { meta: guidesResponse?.meta, guides };
// };

// type QueryFnType = typeof getGuides;

// export type UseUsersOptions = {
//   config?: QueryConfig<QueryFnType>;
//   query?: GetGuideQueryParam;
// };

// export const useGuides = ({ config, query }: UseUsersOptions) => {
//   return useQuery<ExtractFnReturnType<QueryFnType>>({
//     queryKey: ['guides'],
//     queryFn: () => getGuides(query),
//     ...config,
//   });
// };
