import { PaginationFilterQuery } from 'features/global/queryParams/pagination-filter-query';

export interface GetGuideCategoryQueryParam extends PaginationFilterQuery {
  search?: string;
}
