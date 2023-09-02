import { PaginationFilterQuery } from 'features/global/queryParams/pagination-filter-query';

export interface GetGuideQueryParam extends PaginationFilterQuery {
  search?: string;
}
